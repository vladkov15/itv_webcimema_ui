import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useUncontrolled } from 'uncontrollable'
import useEventCallback from '@restart/hooks/useEventCallback'
import useTimeout from '@restart/hooks/useTimeout'
import Anchor from '@restart/ui/Anchor'

import Fade from '../Fade'
import CloseButton, { ButtonCloseProps } from '../button/ButtonClose'

import { usePrefix } from '../../components/ThemeProvider'
import createWithPrefix from '../../utils/createWithPrefix'
import { TransitionType } from '../../helpers'
import { Variant } from '../../types'

import styles from './Alert.module.scss'

type AlertTransitionType = TransitionType | PropTypes.ReactComponentLike

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  prefix?: string
  variant?: Variant
  full?: boolean
  dismissible?: boolean
  dismissibleProps?: ButtonCloseProps
  show?: boolean
  autohide?: boolean
  delay?: number
  onClose?: (a: any, b: any) => void
  onHide?: () => void
  transition?: AlertTransitionType
}

const AlertHeader = createWithPrefix('alert-header', {
  className: styles['alert__header'],
})

const AlertBody = createWithPrefix('alert-body', {
  className: styles['alert__body'],
})

const AlertLink = createWithPrefix('alert-link', {
  Component: Anchor,
  className: styles['alert__link'],
})

const propTypes = {
  prefix: PropTypes.string,
  variant: PropTypes.string,
  full: PropTypes.bool,
  dismissible: PropTypes.bool,
  dismissibleProps: PropTypes.object,
  show: PropTypes.bool,
  autohide: PropTypes.bool,
  delay: PropTypes.number,
  onClose: PropTypes.func,
  onHide: PropTypes.func,
  transition: PropTypes.oneOfType([PropTypes.bool, PropTypes.elementType]),
}

const defaultProps = {
  variant: 'primary',
  show: true,
  autohide: false,
  delay: 5000,
  transition: Fade,
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((uncontrolledProps: AlertProps, ref) => {
  const {
    prefix: prefixProp,
    show,
    autohide,
    delay,
    className,
    children,
    variant,
    onClose,
    onHide,
    full,
    dismissible,
    dismissibleProps,
    transition,
    ...props
  } = useUncontrolled(uncontrolledProps, { show: 'onClose' })

  const Transition = transition === true ? Fade : transition
  const prefix = usePrefix(prefixProp, 'alert')

  const delayRef = useRef(delay)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    delayRef.current = delay
    onCloseRef.current = onClose
  }, [delay, onClose])

  const autohideTimeout = useTimeout()
  const autohideAlert = !!(autohide && show)

  const autohideFn = useCallback(() => {
    if (autohideAlert) onCloseRef.current?.(false, false)
  }, [autohideAlert])

  useEffect(() => {
    autohideTimeout.set(autohideFn, delayRef.current)
  }, [autohideTimeout, autohideFn])

  const handleClose = useEventCallback((e) => {
    onCloseRef.current?.(false, e)
    if (!Transition) handleHide()
  })
  const handleHide = useEventCallback(() => onHide?.())

  const overrideDismissibleProps = useMemo(() => {
    const { variant } = dismissibleProps || {}
    return {
      'aria-label': 'Close',
      variant: variant && ['warning', 'white', 'light'].includes(variant) ? 'white' : undefined,
      ...dismissibleProps,
    }
  }, [dismissibleProps])

  const alert = (
    <div
      role='alert'
      {...(!Transition ? props : undefined)}
      ref={ref}
      className={classNames(
        className,
        styles[prefix],
        variant && styles[`${prefix}--${variant}`],
        full && styles[`${prefix}--full`],
        dismissible && styles[`${prefix}--dismissible`],
      )}
    >
      {dismissible && (
        <CloseButton
          className={styles['btn-close']}
          onClick={handleClose}
          {...overrideDismissibleProps}
        />
      )}
      {children}
    </div>
  )

  if (!Transition) return show ? alert : null

  return (
    <Transition unmountOnExit {...props} ref={undefined} in={show} onExited={handleHide}>
      {alert}
    </Transition>
  )
})

Alert.displayName = 'Alert'
Alert.defaultProps = defaultProps
Alert.propTypes = propTypes

export default Object.assign(Alert, {
  Link: AlertLink,
  Header: AlertHeader,
  Body: AlertBody,
})
