import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckboxItem from './CheckboxItem';
import RadioItem from './RadioItem';

import {
  Waves, Cactus, Mountains, TreeEvergreen,
  Buildings, CurrencyDollar, PersonSimpleBike, 
  PersonSimpleWalk, Boot, FlowerLotus, Palette,
  Bird, BowlFood, FlyingSaucer, Champagne,
  Bed, SketchLogo, Tent, HandCoins,
  Coins, PiggyBank, Grains
} from "@phosphor-icons/react";

export default function SinglePageForm() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [regionPreference, setRegionPreference] = useState("")
    const [environment, setEnvironment] = useState("")
    const [group, setGroup] = useState("")
    const [accomodation, setAccomodation] = useState("")
    const [pace, setPace] = useState("")
    const [interests, setInterests] = useState([])


    const travelDataModel = 
    {
        travelDates: dateRange,
        regionPreference: regionPreference,
        environment: environment,
        group: group,
        accomodations: accomodation,
        pace: pace,
        interests: interests,
    }
    
    function generateTrip(event) {
        event.preventDefault()
        console.log(travelDataModel)
    }

    function handleCheckboxChange(e) {
        const { value } = e.target;
        setInterests((prevInterests) => {
            if (prevInterests.includes(value)) {
            return prevInterests.filter((interest) => interest !== value);
            } else {
            return [...prevInterests, value];
            }
        });
    };


    return (

<div className='flex flex-col items-center'>
      <form>
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
            <input
                type='text'
                value={regionPreference}
                onChange={e => setRegionPreference(e.target.value)}
                className='border-b-2 text-center w-60 my-4 text-sm font-semibold uppercase text-sky-600'></input>
      </div>




    <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>environment</div>
        <div className='grid grid-cols-3 gap-4'>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="environment" value="beach" checked={environment === "beach"} onChange={e=> {setEnvironment(e.target.value)}}/>
          <div className="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Waves size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">beach</p>
            </div>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="environment" value="desert" checked={environment === "desert"} onChange={e=> {setEnvironment(e.target.value)}} />
          <div className="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Cactus size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">desert</p>
            </div>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="environment" value="mountains" checked={environment === "mountains"} onChange={e=> {setEnvironment(e.target.value)}}/>
          <div className="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Mountains size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">mountains</p>
            </div>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="environment" value="forest" checked={environment === "forest"} onChange={e=> {setEnvironment(e.target.value)}}/>
          <div className="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <TreeEvergreen size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">forest</p>
            </div>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="environment"  value="city" checked={environment === "city"} onChange={e=> {setEnvironment(e.target.value)}}/>
          <div className="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Buildings size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">city</p>
            </div>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="environment"  value="farmland" checked={environment === "farmland"} onChange={e=> {setEnvironment(e.target.value)}} />
          <div className="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Grains size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">farmland</p>
            </div>
          </div>
          </label>
      
        </div>
      </div>
      

      
      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>group</div>
        <div className='grid grid-cols-3 gap-4'>
          
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="group" value="solo" checked={group === "solo"} onChange={e=> {setGroup(e.target.value)}}/>
          <div className="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="128" cy="128" r="32"/></svg>
              <p className="text-sm font-semibold uppercase ">solo</p>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="group" value="couple" checked={group === "couple"} onChange={e=> {setGroup(e.target.value)}}/>
          <div className="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="85" cy="128" r="32"/><circle cx="171" cy="128" r="32"/></svg>
              <p className="text-sm font-semibold uppercase ">couple</p>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="group" value="family" checked={group === "family"} onChange={e=> {setGroup(e.target.value)}}/>
          <div className="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="32" cy="128" r="32"/><circle cx="128" cy="128" r="32"/><circle cx="224" cy="128" r="32"/></svg>
              <p className="text-sm font-semibold uppercase ">family</p>
          </div>
          </label>
      
        </div>
      </div>
      
        
      
      

      
    <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>accomodations</div>
        <div className='grid grid-cols-3 gap-4'>
          
        <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="accomodation" value="camping" checked={accomodation === "camping"} onChange={e=> {setAccomodation(e.target.value)}}/>
          <div className="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Tent size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">camping</p>
            </div>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="accomodation" value="hotel" checked={accomodation === "hotel"} onChange={e=> {setAccomodation(e.target.value)}}/>
          <div className="bg-white p-3 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Bed size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">hotel</p>
            </div>
          </div>
          </label>
          <label className="cursor-pointer">
          <input type="radio" className="peer sr-only" name="accomodation" value="resort" checked={accomodation === "resort"} onChange={e=> {setAccomodation(e.target.value)}}/>
          <div className="bg-white p-3 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <SketchLogo size={32} weight='duotone' fill="currentColor" />
              <p className="text-sm font-semibold uppercase ">resort</p>
            </div>
          </div>
          </label>
      
        </div>
      </div>
      

      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>pace</div>
        <div className='grid grid-cols-3 gap-4'>

        <RadioItem
            name="pace"
            label="slow"
            value="slow"
            checked={pace === 'slow'}
            onChange={(e)=>setPace(e.target.value)}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    viewBox="0 0 256 256">
                    <circle cx="128" cy="128" r="32" />
                </svg>}
        />
        
        <RadioItem
            name="pace"
            label="medium"
            value="medium"
            checked={pace === 'medium'}
            onChange={(e)=>setPace(e.target.value)}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    viewBox="0 0 256 256">
                    <circle cx="85" cy="128" r="32" />
                    <circle cx="171" cy="128" r="32" />
                </svg>}
        />

        <RadioItem
            name="pace"
            label="fast"
            value="fast"
            checked={pace === 'fast'}
            onChange={(e)=>setPace(e.target.value)}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    viewBox="0 0 256 256">
                    <circle cx="32" cy="128" r="32" />
                    <circle cx="128" cy="128" r="32" />
                    <circle cx="224" cy="128" r="32" />
                </svg>}
        />
              
      
        </div>
      </div>
      
      


    <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>interests</div>
        <div className='grid grid-cols-3 gap-4'>
        <CheckboxItem
        name="interests"
        label="cycling"
        value="cycling"
        checked={interests.includes("cycling")}
        onChange={handleCheckboxChange}
        icon={<PersonSimpleBike size={32} weight='duotone' fill="currentColor" />}
        />
        <CheckboxItem
        name="interests"
        label="walking"
        value="walking"
        checked={interests.includes("walking")}
        onChange={handleCheckboxChange}
        icon={<PersonSimpleWalk size={32} weight='duotone' fill="currentColor" />}
        />
        <CheckboxItem
        name="interests"
        label="hiking"
        value="hiking"
        checked={interests.includes("hiking")}
        onChange={handleCheckboxChange}
        icon={<Boot size={32} weight='duotone' fill="currentColor" />}
        />
        <CheckboxItem
        name="interests"
        label="relaxation"
        value="relaxation"
        checked={interests.includes("relaxation")}
        onChange={handleCheckboxChange}
        icon={<FlowerLotus size={32} weight='duotone' fill="currentColor" />}
        />
        <CheckboxItem
        name="interests"
        label="culture"
        value="culture"
        checked={interests.includes("culture")}
        onChange={handleCheckboxChange}
        icon={<Palette size={32} weight='duotone' fill="currentColor" />}
        />
        <CheckboxItem
        name="interests"
        label="nature"
        value="nature"
        checked={interests.includes("nature")}
        onChange={handleCheckboxChange}
        icon={<Bird size={32} weight='duotone' fill="currentColor" />}
        />
        <CheckboxItem
        name="interests"
        label="culinary"
        value="culinary"
        checked={interests.includes("culinary")}
        onChange={handleCheckboxChange}
        icon={<BowlFood size={32} weight='duotone' fill="currentColor" />}
        />  
        <CheckboxItem
        name="interests"
        label="paranormal"
        value="paranormal"
        checked={interests.includes("paranormal")}
        onChange={handleCheckboxChange}
        icon={<FlyingSaucer size={32} weight='duotone' fill="currentColor" />}
        />
        <CheckboxItem
        name="interests"
        label="nightlife"
        value="nightlife"
        checked={interests.includes("nightlife")}
        onChange={handleCheckboxChange}
        icon={<Champagne size={32} weight="duotone" fill="currentColor" />}
        />
        </div>
      </div>
      
    <button className='btn btn-outline mt-6 mb-24' onClick={generateTrip}>generate trip</button>
    </form>
    
        </div>

    )
}
