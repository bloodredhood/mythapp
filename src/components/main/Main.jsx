import React from "react";
import classes from "./Main.module.css"
import SearchBlock from "./SearchBlock/SearchBlock";
import EssenceCards from "./essenceCard/EssenceCards";


const Main = (props) => {

    return (
        <div className={classes.back}>
            <div className={classes.container}>
                <SearchBlock />
            </div>
            <div className={`${classes.container} ${classes.flexer}`}>
                <div className={classes.flexer}>
                    <EssenceCards />
                </div>
            </div>
        </div>
    )
}

export default Main