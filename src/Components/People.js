import React from "react";

const People = props => {
  return (
    <div>
      <li>
        {props.name} {props.number}{" "}
      </li>
      <button onClick={props.deletePerson}>Delete </button>
    </div>
  );
};

export default People;
