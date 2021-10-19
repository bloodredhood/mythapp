import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchEssences } from "../redux/actions"
import Essence from "./Essence"


const FetchedEssences = () => {
  const dispatch = useDispatch()
  const essences = useSelector(state => state.essences.fetchedEssences)
  const loading = useSelector(state => state.app.loading)

  if (loading) {
    return (
      "loading..."
    )
  }

  if (!essences.length) {
  return <button
  onClick={() => dispatch(fetchEssences())}
  >Загрузить из базы</button>
  }

  return (
    essences.map(essence => <Essence essence={essence} key={essence.id} />)
  )
}

export default FetchedEssences