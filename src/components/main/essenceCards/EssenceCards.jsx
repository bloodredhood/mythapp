import classes from "./EssenceCards.module.css"
import { connect } from 'react-redux'

const EssenceCards = ({syncEssences}) => {


  return (
    <div className={classes.flexer}>
      {!syncEssences.length ? 'loading...' : syncEssences.map(item => (
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


const mapStateToProps = state => {
  return {
    syncEssences: state.essences
  }
}

export default connect(mapStateToProps,)(EssenceCards)