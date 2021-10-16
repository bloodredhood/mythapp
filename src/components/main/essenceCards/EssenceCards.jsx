import React, { useEffect, useState } from "react"
import classes from "./EssenceCards.module.css"

const EssenceCards = (props) => {

  const [data, setData] = useState([])

  const fetchEssenceItems = () => {
    fetch('/essences')
      .then(response => response.json())
      .then(response => {
        setData(response)
      })
  }

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
                <img src={item.image} alt={item.name} key={item.id}/>
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

export default EssenceCards