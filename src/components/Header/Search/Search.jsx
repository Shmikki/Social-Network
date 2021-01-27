import styles from "./Search.module.css"

function Search(){
    return(
        <form action="" className={styles.form_search}>
            <input type="search" placeholder="Enter your search phrase" className={styles.search_input}/>
            <div className={styles.search_button}>
                <div className={styles.fa_icon}><i className={`fa fa-search`}></i></div>
                <input type="submit"  className={styles.search_btn__opacity}></input>
            </div>
        </form>  
    );
}

export default Search;