import React from "react";
import Essences from "./Essences";
import EssenceForm from "./EssenceForm";
import FetchedEssences from "./FetchedEssences";
import classes from "./Main.module.css"


const Main = (props) => {
  return (
    <>
      <div className={classes.back}>
        <div className={`${classes.container} ${classes.flexer}`}>
          <div className={classes.flexer}>
            <div>
              <EssenceForm />
            </div>
            <div>
              <h2>Синхронные</h2>
              <div className={classes.essences}>
                <Essences />
              </div>
            </div>
            <div>
              <h2>Асинхронные</h2>
              <div className={classes.essences}>
                <FetchedEssences essences = {[]}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main