import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Summary from "./components/Summary";
let names = ["John", "Peter", "Parker", "Sarah"];

function App() {
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
      <table className="table table-bordered table-striped">
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
    </div>
  );
}

export default App;
