import React from "react";
import classes from "./SearchBlock.module.css"

const SearchBlock = () => {
    return (
        <div className={classes.block}>
            <input className={classes.nonhidden} type="text" placeholder="write here" />
            <button>search</button>
        </div>
        
    )
}

export default SearchBlock