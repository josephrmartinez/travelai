import { useState } from 'react'
import './App.css'
import SinglePageForm from './components/SinglePageForm';


const INITIAL_DATA = {}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  

  return (
    <> 
          <SinglePageForm />
    </>
    
  )
}

export default App
