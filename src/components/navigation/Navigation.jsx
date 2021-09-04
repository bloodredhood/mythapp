import React from "react";
import NavItems from "./NavItems/NavItems";
import classes from './Navigation.module.css'

const Navigation = (props) => {

    return (
        <div className={classes.nav}>
            <div className={classes.nav}>
                <NavItems />
            </div>
        </div>
    )
}

export default Navigation