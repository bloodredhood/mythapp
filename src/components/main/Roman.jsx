import React, { useState, useEffect } from "react";
import classes from "./essenceCards/EssenceCards.module.css"

const Roman = (props) => {

    const [data, setData] = useState([])

    const fetchEssenceItems = () => {
      fetch('/essences')
        .then(response => response.json())
        .then(response => response.map(item => {
            const arr = []
            if (item.pantheon === "Roman") {
                arr.push(item)
            }
            return arr
        }))
        .then(response => {
          setData(response)
        })
        .then(data => console.log(data))
    }
  
    useEffect(() => {
      fetchEssenceItems()
    }, [])

    return (
        <div className={classes.flexer}>
          {!data.length ? 'loading...' : data.map(item => (
              
              <label>
              <input type="checkbox" />
              <div className={classes.card} key={item.id}>
                <div className={classes.front}>
                  <div className={classes.image}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={classes.titletext}>{item.name}</div>
                </div>
                <div className={classes.back}>
                  <div className={classes.titletext}>{item.name}</div>
                  <div className={classes.backtext}>{item.text}</div>
                </div>
              </div>
            </label>
            
          ))}
        </div>
      )
}

export default Roman
