import { FC } from "react"
import ListOfComponents from "../modules/ComponentsList/listOfComponents"
import styles from './DefaultLayuot.module.scss'

interface DefaultLayoutProps{
    children: React.ReactNode
}

const DefaultLayout:FC<DefaultLayoutProps> = ({children}) =>{
    return(
        <div className={styles.Main}>
      <div className={styles.Main__Left}>
        <ListOfComponents />
      </div>
      <div className={styles.Main__Right}>
        {children}
        </div>
    </div>
    )
}

export default DefaultLayout