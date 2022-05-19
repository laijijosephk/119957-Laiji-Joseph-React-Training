import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import StateinClass from "./components/StateinClass";
import LifeCycle from "./components/stateManagement/LifeCycle";
import Posts from "./components/stateManagement/Posts";
import UseEffectDemo from "./components/stateManagement/UseEffectDemo";
import UseRefDemo from "./components/stateManagement/UseRefDemo";
import UseRefDemo2 from "./components/stateManagement/UseRefDemo2";
import UseStateasProps from "./components/stateManagement/UseStateasProps";
import UseStateDemo from "./components/stateManagement/UseStateDemo";
import UseStateDemo1 from "./components/stateManagement/UseStateDemo1";
import Summary from "./components/Summary";
import Todo from "./components/Todo";
import TextAnalyzer from "./TextAnalyzer-Assignment";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import CakeContainer from "./components/redux/CakeContainer";
import CakeContainer2 from "./components/redux/CakeContainer2";

let names = ["John", "Peter", "Parker", "Sarah"];

function App() {
  function popup() {
    alert("hello this is a Popup Notification");
  }

  function reverseNames() {
    names.reverse();
    console.log(names);
    // Manual Rendering
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  }

  function promoteName(name) {
    names = [name, ...names.filter((others) => others !== name)];
    // Manual Rendering
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  }

  return (
    <div className="container mt-4">
      {/* <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Name Length</th>
            <th colSpan={2} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, i) => (
            <tr key={i}>
              <Summary
                name={name}
                index={i}
                reverseCallback={reverseNames}
                promoteCallback={promoteName}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={popup}>Click Me</button> */}
      {/* <UseStateDemo /> */}
      {/* <UseStateDemo1 /> */}
      {/* <UseStateasProps /> */}
      {/* <StateinClass data={10} /> */}
      {/* <Todo /> */}
      {/* <LifeCycle />  */}
      {/* <UseEffectDemo /> */}
      {/* <UseRefDemo />
      <hr />
      <UseRefDemo2 /> */}
      {/* <TextAnalyzer /> */}
      {/* <Posts /> */}

      <Provider store={store}>
        <h1 className="text-center bg-danger text-white p-2 ">Cake Shop </h1>
        <CakeContainer />
        <hr />
        <CakeContainer2 />
      </Provider>
    </div>
  );
}

export default App;
