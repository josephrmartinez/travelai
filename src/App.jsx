import { useState } from 'react'
import './App.css'
import SinglePageForm from './components/SinglePageForm';
import Itinerary from './components/Itinerary';


const INITIAL_DATA = {}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  

  return (
    <div className='flex flex-col items-center'> 
      <SinglePageForm />
      <div className='mb-12'><Itinerary /></div>
    </div>
    
  )
}

export default App
