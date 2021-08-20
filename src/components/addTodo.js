import React, { useState } from "react";

const AddToDo = ({ onChange, onClickAdd}) => {

  const [value, setValue] = useState();

  const submitForm = (e)=>{
    value= e.target
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={submitForm}>
      <input
        className="form-control"
        onChange={(e) => onChange(e)}
        name="title"
        id="title"
        type="text"
        placeholder="Enter a task"
        value={value}
      />
      <button className="todo-button-submit" onClick={() => onClickAdd()}>
      <i className="fas fa-search"></i>
         <span className="extra"> Submit </span>
      </button>
      </form>
    </div>
  );
};

export default AddToDo;