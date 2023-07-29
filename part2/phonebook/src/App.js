import { useState } from 'react'
import Filter from './components/Filter'

const App = () => {
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  const addNameNumber = (event) => {
    event.preventDefault()
    let nameValues = persons.map(person => person.name);
    if(nameValues.includes(newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else{
      const new_persons = persons.concat([{name: newName, number: newNumber}])
      console.log(new_persons)
      setPersons(new_persons)
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter />
      <h3>add a new</h3>
      <form onSubmit={addNameNumber}>
        <div>
          name: <input value={newName}
          onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber}
          onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      {filteredPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App