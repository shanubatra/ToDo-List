import React, { useState } from "react";

export default function ToDo(props) {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <li
        id={`li${props.id}`}
        style={{
          textDecoration: isDone ? "line-through" : "none",
        }}
      >
        {props.item}{" "}
        <span>
          <button
            onClick={() => {
              props.deleteItem(props.id);
            }}
          >
            <i className="fa fa-trash"></i>
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              setIsDone(!isDone);
            }}
            className="text-light"
          >
            <i className="fa fa-check"></i>
          </button>
        </span>
      </li>
    </>
  );
}
