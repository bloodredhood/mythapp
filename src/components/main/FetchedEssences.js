import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchEssences} from "../../redux/essences/actions"
import Essence from "./essence/Essence"
import {Col, Spin} from "antd";
import {loaderSelector} from "../../redux/app/selectors";

const FetchedEssences = () => {
  const dispatch = useDispatch()
  const essences = useSelector(state => state.essences.fetchedEssences)
  const loading = useSelector((state) => loaderSelector(state, "fetchEssences"))

  return (
      <Spin tip="Loading..." spinning={!!loading}>
        <button onClick={() => dispatch(fetchEssences())}>
          Загрузить из базы
        </button>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {essences.map((essence, i) =>
          <Col span={6}>
            <Essence essence={essence} key={"essence" + essence.id + i}/>
          </Col>
        )}
        </div>
      </Spin>
  )
}

export default FetchedEssences
