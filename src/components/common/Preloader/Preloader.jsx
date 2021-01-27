import preloader from "../../../assets/images/preloader.gif"
import styles from "./Preloader.module.css";


function Preloader(props){
    return(
         <div className={styles.preload}><img src={preloader} alt="Preloader"/></div>
    )
}

export default Preloader;