import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        name :{" "}
        <input
          type="text"
          value={props.newName}
          onChange={props.handleNameChange}
        />
      </div>
      <div>
        number :{" "}
        <input
          type="text"
          value={props.newNumber}
          onChange={props.handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
