import { useState } from 'react'
import './App.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import {
  Waves, Cactus, Mountains, TreeEvergreen,
  Buildings, CurrencyDollar, PersonSimpleBike, 
  PersonSimpleWalk, Boot, FlowerLotus, Palette,
  Bird, BowlFood, FlyingSaucer, Champagne,
  Bed, SketchLogo, Tent, HandCoins,
  Coins, PiggyBank, Grains
} from "@phosphor-icons/react";


function App() {
  const [count, setCount] = useState(0)
  
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;


  function toggleDateRange() {
    alert("ran")
    setDateRangeVisible(!dateRangeVisible)
  }

  return (
    <div className='flex flex-col items-center'>
      
      <div className='flex flex-col items-center my-8'>
        <div>Travel Dates:</div>
        <div className='w-60 border-b-2'>
          <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
            withPortal
            fixedHeight
          />
        </div>
      </div>
      


      <div className='flex flex-col items-center my-8'>
        <div>destination</div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col items-center'>
            <Waves size={32} />
            <h4>beach</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Cactus size={32} />
            <h4>desert</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Mountains size={32} />
            <h4>mountains</h4>
          </div>
          <div className='flex flex-col items-center'>
            <TreeEvergreen size={32} />
            <h4>forest</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Buildings size={32} />
            <h4>city</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Grains size={32} />
            <h4>farmland</h4>
          </div>
        </div>
      </div>
      

      
      <div className='flex flex-col items-center my-8'>
        <div>group</div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='outline outline-1 outline-gray-400 rounded-lg w-24 h-8 flex justify-center items-center'>
            <h4>solo</h4>
          </div>
          <div className='outline outline-1 outline-gray-400 rounded-lg w-24 h-8 flex justify-center items-center'>
            <h4>couple</h4>
          </div>
          <div className='outline outline-1 outline-gray-400 rounded-lg w-24 h-8 flex justify-center items-center'>
            <h4>family</h4>
          </div>
        </div>
      </div>
      


      <div className='flex flex-col items-center my-8'>
        <div>accomodation</div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col items-center'>
            <Tent size={32} />
            <h4>camping</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Bed size={32} />
            <h4>hotels</h4>
          </div>
          <div className='flex flex-col items-center'>
            <SketchLogo size={32} />
            <h4>resorts</h4>
          </div>
        </div>
      </div>

      

      <div className='flex flex-col items-center my-8'>
        <div>region preference</div>
        <input type='text' className='border-b-2 text-center'></input>
      </div>

      <div className='flex flex-col items-center my-8'>
        <div>budget</div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col items-center'>
            <HandCoins size={32} />
            <h4>cheap</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Coins size={32} />
            <h4>reasonable</h4>
          </div>
          <div className='flex flex-col items-center'>
            <PiggyBank size={32} />
            <h4>zaddy</h4>
          </div>
        </div>
      </div>

      

      <div className='flex flex-col items-center my-8'>
        <div>pace</div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='outline outline-1 outline-gray-400 rounded-full w-24 h-8 flex justify-center items-center'>
            <h4>slow</h4>
          </div>
          <div className='outline outline-1 outline-gray-400 rounded-full w-24 h-8 flex justify-center items-center'>
            <h4>moderate</h4>
          </div>
          <div className='outline outline-1 outline-gray-400 rounded-full w-24 h-8 flex justify-center items-center'>
            <h4>fast</h4>
          </div>
        </div>
      </div>

      

      <div className='flex flex-col items-center my-8'>
        <div>interests</div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col items-center'>
            <PersonSimpleBike size={32} />
            <h4>cycling</h4>
          </div>
          <div className='flex flex-col items-center'>
            <PersonSimpleWalk size={32} />
            <h4>walking</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Boot size={32} />
            <h4>hiking</h4>
          </div>
          <div className='flex flex-col items-center'>
            <FlowerLotus size={32} />
            <h4>relaxation</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Palette size={32} />
            <h4>culture</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Bird size={32} />
            <h4>nature</h4>
          </div>
          <div className='flex flex-col items-center'>
            <BowlFood size={32} />
            <h4>culinary</h4>
          </div>
          <div className='flex flex-col items-center'>
            <FlyingSaucer size={32} />
            <h4>paranormal</h4>
          </div>
          <div className='flex flex-col items-center'>
            <Champagne size={32} />
            <h4>nightlife</h4>
          </div>
        </div>
      </div>

      

      
    </div>
  )
}

export default App
