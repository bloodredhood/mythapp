import React from "react";
import classes from "./Main.module.css"
import EssenceCards from "./essenceCards/EssenceCards";

const Main = (props) => {


    return (
        <div className={classes.back}>
            <div className={`${classes.container} ${classes.flexer}`}>
                <div className={classes.flexer}>
                    <EssenceCards />
                </div>
            </div>
        </div>

    )
}

export default Main