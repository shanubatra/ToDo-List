import React, { useState } from "react";

export default function ToInput(props) {
  let [input, setinput] = useState("");
  return (
    <>
      <div className="form">
        <input
          className="text-dark"
          placeholder="Enter your Tasks"
          type="text"
          onChange={(e) => {
            if (input !== " ") setinput(e.target.value);
          }}
          value={input}
        />{" "}
        <button
          onClick={() => {
            props.Addlist(input);
            setinput("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
    </>
  );
}
