import React, { useState } from "react";
import ToInput from "./ToInput";
import ToDo from "./ToDo";

export default function App() {
  let [list, setlist] = useState([]);

  function Addlist(input) {
    setlist([...list, input]);
  }

  function deleteItem(key) {
    let newList = [...list];
    newList.splice(key, 1);
    setlist([...newList]);
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>

        <ToInput Addlist={Addlist} />

        <ul>
          {list.map((item, i) => {
            return <ToDo key={i} item={item} id={i} deleteItem={deleteItem} />;
          })}
        </ul>
      </div>
    </>
  );
}
