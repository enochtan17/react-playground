import { useEffect, useState } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import List from './components/List'
import './App.css'

function App() {

  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      setBreeds(Object.keys(data.message))
    })
  }, [])

  return (
    <div className='App'>
      Hello World
      <hr></hr>
      <Form breeds={breeds} />
      <hr></hr>
      <List breeds={breeds} />
      <hr></hr>
      <Search breeds={breeds} />
      <hr></hr>
    </div>
  )
}

export default App
