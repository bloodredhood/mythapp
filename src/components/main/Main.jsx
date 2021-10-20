import React from "react";
import Essences from "./Essences";
import EssenceForm from "./EssenceForm";
import FetchedEssences from "./FetchedEssences";
import classes from "./Main.module.css"
import {Tabs} from "antd";
import {Content} from "antd/es/layout/layout";

const { TabPane } = Tabs;

const Main = () => {
  return (
    <Content className={classes.content}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <div className={classes.row} style={{minHeight: "100vh"}}>
            <div className={classes.col}>
              <EssenceForm />
            </div>
            <div className={classes.col}>
              <h2>Синхронные</h2>
              <div className={classes.col}>
                <Essences />
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <div style={{minHeight: "100vh"}}>
            <h2>Асинхронные</h2>
            <div className={classes.essences}>
              <FetchedEssences essences = {[]}/>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </Content>
  )
}

export default Main
