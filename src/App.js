import React, { useState } from 'react'
import Filter from './Components/Filter'
import Form from './Components/Form'
import People from './Components/People'

const App = () => {
  const [ people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  
  ]) 
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searchedValue,setSearchedValue] = useState([])
  

 

 


  const handleSearch=(e)=> {
    // Variable to hold the original version of the list
let currentList = []
    // Variable to hold the filtered list before putting into state
let newList = []
if (e.target.value !== "") {
         currentList = people
newList = currentList.filter(item => {
            const lc = item.toLowerCase()
             const filter = e.target.value.toLowerCase()
             return lc.includes(filter)
  });
} else {
        // If the search bar is empty, set newList to original task list
  newList = people
}
setSearchedValue(newList)
    // Set the filtered state based on what our rules added to newList

}



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchedValue={searchedValue} handleSearch={handleSearch}/>
      <Form newName={newName} 
           newNumber={newNumber} 
           setNewNumber={setNewNumber}
           setNewName={setNewName}
           people={people}
           setPeople={setPeople}/>
        
       <h2>Numbers</h2>
     <People people={people}/>
      
    </div>
  )
}

export default App
