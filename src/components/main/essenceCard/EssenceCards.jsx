import React from 'react'
import classes from "./EssenceCards.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { fetchEssenceCards } from '../../redux/actions'

const EssenceCards = () => {
  const dispatch = useDispatch
  const essences = useSelector(state => state.fetchEssenceCards)
  
  if (!essences.length) {
    return <button onClick={() => dispatch(fetchEssenceCards())}>
      Download
    </button>
  }

  return essences.map(essence => (
    <label>
      <input type="checkbox"/>
      <div className={classes.card}>
        <div className={classes.front}>
          <div className={classes.image}>
            <img src={essence.image} alt={essence.name} key={essence.id} />
          </div>
          {essence.name}
        </div>
        <div className={classes.back}>
          {essence.name}
          {essence.text}
        </div>
      </div>
    </label>
  ))

}


export default EssenceCards