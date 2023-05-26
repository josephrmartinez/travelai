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


  return (
    <div className='flex flex-col items-center'>
      
      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>travel dates</div>
        <div className='w-60 border-b-2 my-4 text-sky-600 font-semibold text-sm'>
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
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>region preference</div>
        <input type='text' className='border-b-2 text-center w-60 my-4 text-sm font-semibold uppercase text-sky-600'></input>
      </div>




    <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>environment</div>
        <div className='grid grid-cols-3 gap-4'>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Waves size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">beach</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Cactus size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">desert</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Mountains size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">mountains</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <TreeEvergreen size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">forest</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Buildings size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">city</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Grains size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">farmland</p>
            </div>
          </div>
          </label>
      
        </div>
      </div>
      

      
      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>group</div>
        <div className='grid grid-cols-3 gap-4'>
          
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="group" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="128" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">solo</p>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="group" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="85" cy="128" r="32"/><circle cx="171" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">couple</p>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="group" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="32" cy="128" r="32"/><circle cx="128" cy="128" r="32"/><circle cx="224" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">family</p>
          </div>
          </label>
      
        </div>
      </div>
      
        
      
      

      
    <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>accomodation</div>
        <div className='grid grid-cols-3 gap-4'>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="accomodation" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Tent size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">camping</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="accomodation" />
          <div class="bg-white p-3 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Bed size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">hotel</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="accomodation" />
          <div class="bg-white p-3 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <SketchLogo size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">resort</p>
            </div>
          </div>
          </label>
      
        </div>
      </div>
      

      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>pace</div>
        <div className='grid grid-cols-3 gap-4'>
          
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="pace" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="128" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">slow</p>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="pace" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="85" cy="128" r="32"/><circle cx="171" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">medium</p>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="pace" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="32" cy="128" r="32"/><circle cx="128" cy="128" r="32"/><circle cx="224" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">fast</p>
          </div>
          </label>
      
        </div>
      </div>
      
      


    <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>interests</div>
        <div className='grid grid-cols-3 gap-4'>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <PersonSimpleBike size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">cycling</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <PersonSimpleWalk size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">walking</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Boot size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">hiking</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <FlowerLotus size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">relaxation</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Palette size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">culture</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Bird size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">nature</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <BowlFood size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">culinary</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <FlyingSaucer size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">paranormal</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Champagne size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">nightlife</p>
            </div>
          </div>
          </label>
      
        </div>
      </div>
      


      

      
    </div>
  )
}

export default App




      // <div className='flex flex-col items-center my-8'>
      //   <div>budget</div>
      //   <div className='grid grid-cols-3 gap-4'>
      //     <div className='flex flex-col items-center'>
      //       <HandCoins size={32} />
      //       <h4>cheap</h4>
      //     </div>
      //     <div className='flex flex-col items-center'>
      //       <Coins size={32} />
      //       <h4>moderate</h4>
      //     </div>
      //     <div className='flex flex-col items-center'>
      //       <PiggyBank size={32} />
      //       <h4>zaddy</h4>
      //     </div>
      //   </div>
      // </div>