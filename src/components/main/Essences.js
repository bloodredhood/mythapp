import React from "react";
import {connect} from 'react-redux'
import Essence from "./essence/Essence";


const Essences = ({syncEssences}) => {

  return (
    (!syncEssences.length)
      ? 'no cards!!!'
      : syncEssences.map(essence => <Essence essence={essence} key={essence.id}/>)
  )
}

const mapStateToProps = state => {
  return {
    syncEssences: state.essences.essences
  }
}

export default connect(mapStateToProps, null)(Essences)
