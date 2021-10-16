import React from "react";
import EssenceCards from "./essenceCards/EssenceCards";
import classes from "./Main.module.css"
import { Switch, Route } from "react-router-dom"
import Celtic from "./Celtic"
import Chinese from "./Chinese"
import Egyptian from "./Egyptian"
import Greek from "./Greek"
import Hindu from "./Hindu"
import Japanese from "./Japanese"
import Maya from "./Maya"
import Norse from "./Norse"
import Roman from "./Roman"
import Slavic from "./Slavic"

const Main = (props) => {
    return (
        <>
            <div className={classes.back}>
                <div className={`${classes.container} ${classes.flexer}`}>
                    <div className={classes.flexer}>
                        <EssenceCards />

                        <Switch>
                            <Route path="/">
                                <EssenceCards />
                            </Route>
                            <Route path="/greek">
                                <Greek />
                            </Route>
                            <Route path="/roman">
                                <Roman />
                            </Route>
                            <Route path="/egyptian">
                                <Egyptian />
                            </Route>
                            <Route path="/norse">
                                <Norse />
                            </Route>
                            <Route path="/celtic">
                                <Celtic />
                            </Route>
                            <Route path="/slavic">
                                <Slavic />
                            </Route>
                            <Route path="/hindu">
                                <Hindu />
                            </Route>
                            <Route path="/chinese">
                                <Chinese />
                            </Route>
                            <Route path="/japanese">
                                <Japanese />
                            </Route>
                            <Route path="/maya">
                                <Maya />
                            </Route>
                        </Switch>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Main