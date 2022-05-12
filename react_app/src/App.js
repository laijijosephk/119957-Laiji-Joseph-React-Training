// Root Component

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Message from "./components/Message";
import MyClassComponent from "./components/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent";



function App() {
  return <>
    <MyFunctionalComponent />
    <Message />
    <MyClassComponent />
  </>;

}

export default App;
