
import DefaultLayout from "src/layouts/DefaultLayout"
import styles from '../../style/GeneralStyles.module.scss'

import LoaderAnimation from "./examples/LoaderAnimations"
import LoaderSizes from "./examples/LoaderSize"
import LoaderAPI from "./tables/LoaderAPI"

const LoaderPage = () =>{
    return(
        <DefaultLayout>
            <div className={styles.Page}>
               <h2>Loader</h2>
               <p>Examples</p>
               <h2>Loader Animations Props</h2>
               <p>Loader have 2 animations, 'border' and 'grow'</p>
               <div className={styles.Example}>
                <LoaderAnimation.LoaderAnimations />
                </div> 
                <div className={styles.Example}>
                <LoaderAnimation.LoaderAnimationsCode />
                </div> 
                <h2>Loader Size</h2>
                <div className={styles.Example}>
                    <LoaderSizes.LoaderSize />
                </div>
                <div className={styles.Example}>
                    <LoaderSizes.LoaderSizeCode />
                </div>
                <h2>API</h2>
                <LoaderAPI />
            </div>
        </DefaultLayout>
    )
}

export default LoaderPage 