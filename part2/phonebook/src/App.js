import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const filteredData = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredPersons(filteredData)
    setNewFilter(event.target.value)
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
      filter shown with <input value={newFilter} onChange={handleFilterChange} />
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