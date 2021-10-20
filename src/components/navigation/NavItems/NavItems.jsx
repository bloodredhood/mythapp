import React, { useEffect, useState } from "react"
import { NavLink, } from "react-router-dom"
import classes from "./NavItems.module.css"

const NavItems = () => {

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
              <div className={classes.maindiv}>
                {
                    !data.length ? 'loading...' : data.map(item => (
                        <NavLink to={`/${item.name}`} key={item.id}>
                            <div className={classes.itemdiv} >
                                <img className={classes.images} src={item.link} alt={item.name} />
                            </div>
                        </NavLink>
                    ))
                }
            </div>

    )
}

export default NavItems
