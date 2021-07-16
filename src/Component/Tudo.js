import React, { useState } from "react";

import { connect } from "react-redux";
function Tudo(props) {
  console.log(" in Tudeo app->>>>>", props.task.length);
  console.log(props);
  const [value, setValue] = useState("");

  return (
    <div>
      <h1> in Tudo app</h1>
      <h1> i n tudeo component</h1>

      <input
        value={value}
        onChange={(e) => {
          // console.log(e.target.value)
          setValue(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          props.AddTask(value);
          setValue("");
        }}
      >
        ADD TASK
      </button>

      <div>
        <ul>
          {props.task.map((person, idx) => {
            return <li key={idx}>{person}years old</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

const mapstatetoProps = (store) => {
  console.log(" IN MAP STROE");
  return store.Tudo;
};

// const mapDispathctoPRosp = (dispatch) => {
//   return {
//     AddTask: () => {
//       return dispatch({ type: "AddTask", currentTask: "" });
//     },
//     Deletestask: () => {
//       return dispatch({ type: " Deletestask" });
//     },
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    AddTask: (val) => dispatch({ type: "AddTask", currentTask: val }),
  };
};

const HigherOrderCompontne = connect(mapstatetoProps, mapDispatchToProps)(Tudo);
export default HigherOrderCompontne;
