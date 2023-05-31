import { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckboxItem from './CheckboxItem';
import RadioItem from './RadioItem';
import { DateTime } from 'luxon';
import { Configuration, OpenAIApi } from "openai";

import {
  Waves, Cactus, Mountains, TreeEvergreen,
  Buildings, PersonSimpleBike, 
  PersonSimpleWalk, Boot, FlowerLotus, Palette,
  Bird, BowlFood, FlyingSaucer, Champagne,
  Bed, SketchLogo, Tent, Grains
} from "@phosphor-icons/react";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


export default function SinglePageForm({setItinerary}) {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [regionPreference, setRegionPreference] = useState("")
    const [environment, setEnvironment] = useState("")
    const [group, setGroup] = useState("")
    const [accommodation, setAccommodation] = useState("")
    const [segmentDuration, setSegmentDuration] = useState("")
    const [interests, setInterests] = useState([])
    const [prompt, setPrompt] = useState("")
    const [loading, setLoading] = useState(false)


    const travelData = 
    {
        startDate: DateTime.fromJSDate(startDate).toISODate(),
        endDate: DateTime.fromJSDate(endDate).toISODate(),
        regionPreference: regionPreference,
        environment: environment,
        group: group,
        accommodations: accommodation,
        segmentDuration: segmentDuration,
        interests: interests,
    }
    
    function generateTrip(event) {
        event.preventDefault()
        makeAPIcall()
    }


    
    // `Return your response as a JSON object with the following keys for each section of the trip: dates, location, activities. The final JSON object should be an array of trip segments.`

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

    function makeAPIcall() {
const newPrompt = `Create an extraordinary travel itinerary based on the following information ${JSON.stringify(travelData)}. Be as specific as possible with accommodation, activity suggestions, and travel connections between the trip segments. Ensure that the itinerary includes some off-the-beaten-path suggestions and that the activity recommendations take the provided interests into account. Return your response in JSON format with the key trip_segments containing an array of trip segments. Each trip segment should include the following keys:
'start_date' (string): The starting date of the trip segment.
'end_date' (string): The ending date of the trip segment.
'location' (string): The location or destination of the trip segment.
'travel_logistics' (string): Information related to travel logistics, such as transportation options or specific instructions.
'accommodation_details' (string): Details about the accommodation for the trip segment, including hotel names, addresses, or booking information.
'activities' (array of strings): An array containing multiple strings representing activity suggestions for the trip segment.
 Your entire response should be in JSON format, nothing else.`

        setLoading(true)
        // openAI configuration object
        const configuration = new Configuration({
            apiKey: apiKey,
        });         
        const openai = new OpenAIApi(configuration);
        console.log(newPrompt)
        openai
            .createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: newPrompt }],
            })
            .then((completion) => {
                // Handle API response
                const generatedText =
                    completion.data.choices[0].message.content;

                console.log(completion);
                console.log(generatedText);
                setItinerary(JSON.parse(generatedText));
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setItinerary("");
                setLoading(false)
            });
    }


    return (

<div className='flex flex-col items-center'>
      <form>
      <div className='flex flex-col items-center mt-8'>
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
          <RadioItem
            name="environment"
            label="beach"
            value="beach"
            checked={environment === 'beach'}
            onChange={(e)=>setEnvironment(e.target.value)}
            icon={<Waves size={32} weight='duotone' fill="currentColor" />}/>
          <RadioItem
            name="environment"
            label="desert"
            value="desert"
            checked={environment === 'desert'}
            onChange={(e)=>setEnvironment(e.target.value)}
            icon={<Cactus size={32} weight='duotone' fill="currentColor" />}/>
          <RadioItem
            name="environment"
            label="mountains"
            value="mountains"
            checked={environment === 'mountains'}
            onChange={(e)=>setEnvironment(e.target.value)}
            icon={<Mountains size={32} weight='duotone' fill="currentColor" />}/>
          <RadioItem
            name="environment"
            label="forest"
            value="forest"
            checked={environment === 'forest'}
            onChange={(e)=>setEnvironment(e.target.value)}
            icon={<TreeEvergreen size={32} weight='duotone' fill="currentColor" />}/>
          <RadioItem
            name="environment"
            label="city"
            value="city"
            checked={environment === 'city'}
            onChange={(e)=>setEnvironment(e.target.value)}
            icon={<Buildings size={32} weight='duotone' fill="currentColor" />}/>
          <RadioItem
            name="environment"
            label="farmland"
            value="farmland"
            checked={environment === 'farmland'}
            onChange={(e)=>setEnvironment(e.target.value)}
            icon={<Grains size={32} weight='duotone' fill="currentColor" />}/>
          
        </div>
      </div>
      

      
      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>group</div>
        <div className='grid grid-cols-3 gap-4'>
          <RadioItem
            name="group"
            label="solo"
            value="solo"
            checked={group === 'solo'}
            onChange={(e)=>setGroup(e.target.value)}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    viewBox="0 0 256 256">
                    <circle cx="128" cy="128" r="32" />
                </svg>}/>
        <RadioItem
            name="group"
            label="couple"
            value="couple"
            checked={group === 'couple'}
            onChange={(e)=>setGroup(e.target.value)}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    viewBox="0 0 256 256">
                    <circle cx="85" cy="128" r="32" />
                    <circle cx="171" cy="128" r="32" />
                </svg>}/>
        <RadioItem
            name="group"
            label="family"
            value="family"
            checked={group === 'family'}
            onChange={(e)=>setGroup(e.target.value)}
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
                </svg>}/>
        </div>
      </div>
      
        
      
      

      
    <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>accommodations</div>
        <div className='grid grid-cols-3 gap-4'>          
          <RadioItem
            name="accommodation"
            label="camping"
            value="camping"
            checked={accommodation === 'camping'}
            onChange={(e)=>setAccommodation(e.target.value)}
            icon={<Tent size={32} weight='duotone' fill="currentColor" />}/> 
          <RadioItem
            name="accommodation"
            label="hotel"
            value="hotel"
            checked={accommodation === 'hotel'}
            onChange={(e)=>setAccommodation(e.target.value)}
            icon={<Bed size={32} weight='duotone' fill="currentColor" />}/>
          <RadioItem
            name="accommodation"
            label="resort"
            value="resort"
            checked={accommodation === 'resort'}
            onChange={(e)=>setAccommodation(e.target.value)}
            icon={<SketchLogo size={32} weight='duotone' fill="currentColor" />}/>
        </div>
      </div>
      

      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>pace</div>
        <div className='grid grid-cols-3 gap-4'>

        <RadioItem
            name="pace"
            label="relaxed"
            value="long"
            checked={segmentDuration === 'long'}
            onChange={(e)=>setSegmentDuration(e.target.value)}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    viewBox="0 0 256 256">
                    <circle cx="128" cy="128" r="32" />
                </svg>}/>
        <RadioItem
            name="pace"
            label="moderate"
            value="medium"
            checked={segmentDuration === 'medium'}
            onChange={(e)=>setSegmentDuration(e.target.value)}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    viewBox="0 0 256 256">
                    <circle cx="85" cy="128" r="32" />
                    <circle cx="171" cy="128" r="32" />
                </svg>}/>
        <RadioItem
            name="pace"
            label="energetic"
            value="short"
            checked={segmentDuration === 'short'}
            onChange={(e)=>setSegmentDuration(e.target.value)}
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
                </svg>}/>
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

        <div className='w-full flex flex-col items-center'>
                    {!loading ? <button className='btn btn-outline mt-10 mb-16' onClick={generateTrip}>generate itinerary</button>
                        : <div className='btn btn-outline mt-10 mb-16 loading cursor-default'>making itinerary</div>}
        </div>        
        
        </form>

            
    
             
    </div>

    )
}
