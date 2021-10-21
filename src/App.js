import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";
import {Layout} from "antd";

//CSS imports
import 'antd/dist/antd.css';
import "./App.css";

function App() {
  return (
    <Layout className="App">
      <Navigation />
      <Main />
    </Layout>
  );
}

export default App;
