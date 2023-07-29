import { useState } from 'react'




const Filter = () => {
    const [filteredPersons, setFilteredPersons] = useState(persons)
    const [newFilter, setNewFilter] = useState('')
    const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const handleFilterChange = (event) => {
    const filteredData = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredPersons(filteredData)
    setNewFilter(event.target.value)
  }
    return(<div>
        filter shown with <input value={newFilter} onChange={handleFilterChange} />
    </div>)
}

export default Filter
