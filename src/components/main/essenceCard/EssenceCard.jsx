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
            "King of Gods, Zeus strives for fairness and justice, but will not hesitate to call down the thunder when there's smiting to be done! Zeus' father, the Titan Cronus, immediately swallowed his children after birth so that none could overthrow him as he had his own father. When Zeus was born, Rhea, Zeus' mother, hid the child from Cronus and gave the Titan a rock in swaddling clothes, which he swallowed instead. In secret, Zeus grew up on the isle of Crete until he was old and strong enough to challenge his father. During their battle, Zeus slit open Cronus' stomach, allowing his swallowed brothers and sisters to escape, slaying the Titan. Then, Zeus released the Cyclops and other beings Cronus had kept imprisoned. In gratitude, the Cyclops awarded Zeus control over lightning. With his two brothers, Poseidon and Hades, the three Gods drew lots to decide command of creation. Poseidon became king of the sea, Hades the underworld, and Zeus the sky. From his golden throne atop Mount Olympus, Zeus now rules Gods and Men with his wife Hera, upholding justice, hospitality, oaths, and honesty to all under his domain. Yet, Zeus is a restless God, and while he holds high expectations for others, he does not keep those standards for himself. Chiefly, Zeus is nearly infamous for several infidelities to his wife which have resulted in dozens of children beget by other women, most famous of which are Hercules, Artemis, and Athena. Such wanton unfaithfulness is the source of great jealousy from Hera, though as King, Zeus can ultimately do as he wishes."
          </p>
        </div>
      </div>
    </label>
  )

}

export default EssenceCard