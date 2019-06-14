import React from "react";

const People = props => {
  const rows = () =>
    props.people.map(person => (
      <li key={person.name}>
        {person.name} {person.number}
      </li>
    ));
  return <ul>{rows()}</ul>;
};

export default People;
