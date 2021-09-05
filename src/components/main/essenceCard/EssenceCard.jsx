import React from 'react'
import classes from "./EssenceCard.module.css"

const EssenceCard = (props) => {



  return (
    <label>
      <input type="checkbox"/>
      <div className={classes.card}>
        <div className={classes.front}>
          <div className={classes.image}>
            <img src={"https://static.wikia.nocookie.net/smite_gamepedia/images/e/e3/SkinArt_Zeus_Default.jpg"} alt={"Zeus"} />
          </div>
          Zeus
        </div>
        <div className={classes.back}>
          Zeus
          <p>
            King of Gods, Zeus strives for fairness and justice, but will not hesitate to call down the thunder when there's smiting to be done! With his two brothers, Poseidon and Hades, the three Gods drew lots to decide command of creation. Poseidon became king of the sea, Hades the underworld, and Zeus the sky. From his golden throne atop Mount Olympus, Zeus now rules Gods and Men with his wife Hera, upholding justice, hospitality, oaths, and honesty to all under his domain.
          </p>
        </div>
      </div>
    </label>
  )

}

export default EssenceCard