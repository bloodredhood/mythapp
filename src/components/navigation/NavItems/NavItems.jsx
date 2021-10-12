import React, { useEffect, useState } from "react"
import { Router, NavLink, Switch, Route } from "react-router-dom"
import classes from "./NavItems.module.css"
import Main from "./../../main/Main"
import Celtic from "../../main/Celtic"
import Chinese from "../../main/Chinese"
import Egyptian from "../../main/Egyptian"
import Greek from "../../main/Greek"
import Hindu from "../../main/Hindu"
import Japanese from "../../main/Japanese"
import Maya from "../../main/Maya"
import Norse from "../../main/Norse"
import Roman from "../../main/Roman"
import Slavic from "../../main/Slavic"

const NavItems = (props) => {

    const [data, setData] = useState([])

    const fetchPantheonItems = () => {
        fetch('/pantheons')
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
    }
    //json-server --watch db.json

    useEffect(() => {
        fetchPantheonItems()
    }, [])

    return (
        <Router>
            <div className={classes.maindiv}>
                {
                    !data.length ? 'loading...' : data.map(item => (
                        <NavLink to={`/${item.name}`}>
                            <div className={classes.itemdiv} key={item.id} >
                                <img className={classes.images} src={item.link} alt={item.name} />
                            </div>
                        </NavLink>
                    ))
                }
            </div>

            <Switch>
                <Route path="/common">
                    <Main />
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
        </Router>
    )
}

export default NavItems