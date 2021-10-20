import React from "react";
import NavItems from "./NavItems/NavItems";
import classes from './Navigation.module.css'
import {Header} from "antd/es/layout/layout";

const Navigation = () => {

    return (
        <Header className={classes.nav}>
            <div className={classes.nav}>
                <NavItems />
            </div>
        </Header>
    )
}

export default Navigation
