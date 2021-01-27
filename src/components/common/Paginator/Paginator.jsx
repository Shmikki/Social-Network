import styles from "./Paginator.module.css";
import {useState} from "react";


function Paginator(props){
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

   let [portionNumber,setPortionNumber] = useState(1);
   const pages = [];
   for(let i = 1; i < pagesCount; i++){
       pages.push(i);
   }
   let leftStepPortion = (portionNumber - 1) * props.pageSize;
   let rightStepPortion = portionNumber * props.pageSize;

   return(
       <div className={styles.pages}>
            <button disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)} className={styles.switchButton}>
                ❮ Previous
            </button>
           {pages.filter(p => p >= leftStepPortion && p <= rightStepPortion).map(p => {
               return(
               <span key={p} onClick={() => props.onChangeCurrentPage(p) }
               className={p === props.currentPage ? `${styles.currentPage}` : `${styles.page}`}>
               {p}</span>)
           })}
           <button onClick={() => setPortionNumber(portionNumber + 1)} className={styles.switchButton}>
               Next ❯
           </button>
       </div>
   )
}

export default Paginator;