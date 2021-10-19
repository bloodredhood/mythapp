import React from "react";
import classes from './Essence.module.css'

const Essence = ({essence}) => {

  return (
    <div className={classes.flexer}>
      <label>
        <input type="checkbox" className={classes.inputhide} />
        <div className={classes.card}>
          <div className={classes.front}>
            <div className={classes.image}>
              <img src={essence.image} alt={essence.name} key={essence.id} />
            </div>
            <div className={classes.titletext} key={essence.id}>
              {essence.name}
            </div>
          </div>
          <div className={classes.back}>
            <div className={classes.titletext} key={essence.id}>
              {essence.name}
            </div>
            <div className={classes.backtext} key={essence.id}>
              {essence.text}
            </div>
          </div>
        </div>
      </label>
    </div>
  )
}

export default Essence