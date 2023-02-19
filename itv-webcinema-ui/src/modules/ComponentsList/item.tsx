import { FC } from "react"
import { Route } from "react-router-dom"

import styles from './List.module.scss'

interface ItemProps{
    name: string
    children: React.ReactNode
}

const Item: FC<ItemProps> = ({name, children}) =>{

    return(<div className={styles.Item}>
        <div className={styles.Item__Name}>
          <a href={`/${name}`} >{name}</a>
        </div>
    </div>)
}


export default Item