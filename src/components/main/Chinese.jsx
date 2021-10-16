import React, { useState, useEffect } from "react";
import classes from "./essenceCards/EssenceCards.module.css"

const Chinese = (props) => {

    const [data, setData] = useState([])

    const fetchEssenceItems = () => {
      fetch('/essences')
        .then(response => response.json())
        .then(response => response.filter(item => item.pantheon === "Chinese"))
        .then(response => {
          setData(response)
        })
        
    }
    console.log(data)
    useEffect(() => {
      fetchEssenceItems()
    }, [data])

    return (
        <div className={classes.flexer}>
          {!data.length ? 'loading...' : data.map(item => (
              
              <label>
              <input type="checkbox" />
              <div className={classes.card}>
                <div className={classes.front}>
                  <div className={classes.image}>
                    <img src={item.image} alt={item.name} key={item.id} />
                  </div>
                  <div className={classes.titletext} key={item.id}>{item.name}</div>
                </div>
                <div className={classes.back}>
                  <div className={classes.titletext} key={item.id}>{item.name}</div>
                  <div className={classes.backtext} key={item.id}>{item.text}</div>
                </div>
              </div>
            </label>
            
          ))}
        </div>
      )
}

export default Chinese