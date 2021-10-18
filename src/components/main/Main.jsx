import React from "react";
import EssenceCards from "./essenceCards/EssenceCards";
import classes from "./Main.module.css"


const Main = (props) => {
    return (
        <>
            <div className={classes.back}>
                <div className={`${classes.container} ${classes.flexer}`}>
                    <div className={classes.flexer}>
                        <EssenceCards />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Main