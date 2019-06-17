import React, { useState, useEffect } from "react";
import Filter from "./Components/Filter";
import Form from "./Components/Form";
import People from "./Components/People";
import personsServices from "./Services/personsServices";

const App = () => {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchedValue, setSearchedValue] = useState([]);

  useEffect(() => {
    personsServices.getAll().then(response => {
      setPeople(response.data);
    });
  }, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };
  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    personsServices.create(personObject).then(response => {
      setPeople(
        people.find(person => person.name === newName)
          ? alert(`${newName} is already added to phonebook`)
          : people.concat(personObject)
      );
      setNewName("");
      setNewNumber("");
    });
  };

  const handleSearch = e => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];
    if (e.target.value !== "") {
      currentList = people;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = people;
    }
    setSearchedValue(newList);
  };

  const deletePerson = id => {
    personsServices.remove(id);
    setPeople(people.filter(p => p.id !== id));
  };
  const rows = () =>
    people.map(person => (
      <People
        key={person.id}
        name={person.name}
        number={person.number}
        deletePerson={() => deletePerson(person.id)}
      />
    ));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchedValue={searchedValue} handleSearch={handleSearch} />
      <Form
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        people={people}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
