import React, { useState } from "react";

export default function Todo() {
  const [username, setusername] = useState("Mike");
  const [todoitems, settodoitems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Collect Tickets", done: true },
    { action: "Meeting @6pm", done: false },
    { action: "Call John", done: false },
  ]);

  const [newItemtext, setnewItemtext] = useState("");

  const [showCompleted, setshowCompleted] = useState(false);

  function createNewTodo() {
    //   console.log(newItemtext);

    const foundItem = todoitems.find(
      (item) => item.action === newItemtext.action
    );
    if (!foundItem) {
      settodoitems([...todoitems, { action: newItemtext, done: false }]);
      setnewItemtext("");
    }
    console.log(todoitems);
  }

  function toggleTodo(todo) {
    settodoitems(
      todoitems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    );
  }
  function todoTableRow(doneValue) {
    return todoitems
      .filter((item) => item.done === doneValue)
      .map((item, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.action}</td>
          <td>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleTodo(item)}
            />
          </td>
        </tr>
      ));
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h2 className="bg-primary text-white text-center">
            {username}'s Todo List ({todoitems.filter((t) => !t.done).length}{" "}
            items to do )
          </h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              value={newItemtext}
              onChange={(e) => setnewItemtext(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={createNewTodo}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRow(false)}</tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={(e) => setshowCompleted(e.target.checked)}
            />
            <label className="mx-3 text-primary"> Show Completed</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {showCompleted && (
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Done</th>
                  </tr>
                </thead>
                <tbody>{todoTableRow(true)}</tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
