import React from "react"

const Form = (props) =>{
  const handleNameChange = (event) =>{
    props.setNewName(event.target.value)
 }
 
  const handleNumberChange = (event) =>{
  props.setNewNumber(event.target.value)
}
const addPerson = (event) =>{
  event.preventDefault()
  const personObject ={
    name: props.newName,
    number:props.newNumber
  } 
  props.setPeople(props.people.find(person=>person.name===props.newName) ? alert(`${props.newName} is already added to phonebook`) : props.people.concat(personObject) )
  props.setNewName('')
  props.setNewNumber('')
}
    return(
        <form onSubmit={addPerson}>
        <div>
          name : <input type="text" value={props.newName} onChange={handleNameChange} /> 
        </div>
        <div>
          number : <input type="text" value={props.newNumber} onChange = {handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form