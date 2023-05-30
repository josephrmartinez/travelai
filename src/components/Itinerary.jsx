import { Activity } from '@phosphor-icons/react'
import { useState } from 'react'
import { DateTime } from 'luxon';


const ItinerarySegment = ({ start_date, end_date, location, activities, travel_information, accommodation_details }) => {
  const [expanded, setExpanded] = useState(false);
  const startDateFormatted = DateTime.fromISO(start_date).toLocaleString({ month: 'short', day: 'numeric' })
  const endDateFormatted = DateTime.fromISO(end_date).toLocaleString({ month: 'short', day: 'numeric' })

      
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const activityItems = activities.map((activity, index) => (
      <div className='flex flex-row mb-2' key={index}><div className='text-[18px]'>&#x2022;</div><div className='ml-1' key={activity}>{activity}</div></div>
  ));

  return (
    <div className={`outline outline-gray-100 rounded-md w-11/12 mx-auto p-4 my-3  ${!expanded && 'hover:bg-slate-100'}  duration-500`}>
      <div className='flex flex-row w-full justify-between cursor-pointer' onClick={toggleExpand}>
        <div className='uppercase font-semibold text-sm text-gray-600'>{startDateFormatted} - {endDateFormatted}</div>
        <div className='uppercase font-semibold text-sm border-b-2 rounded-sm border-sky-500  text-sky-600'>{location}</div>
      </div>
      {expanded && (
        <>
          <div className='mt-5 uppercase text-sm font-semibold text-gray-600'>Travel</div>
          <div className='text-sm ml-3'>{travel_information}</div>
          <div className='mt-5 uppercase text-sm font-semibold text-gray-600'>Accommodation</div>
          <div className='text-sm ml-3'>{accommodation_details}</div>
          <div className='mt-5 uppercase text-sm font-semibold text-gray-600'>Activities</div>
          <div className='text-sm'>{activityItems}</div>
        </>
      )}
    </div>
  );
};

export default function Itinerary({ itinerary }) {
    if (!itinerary || !itinerary.trip_segments) {
        return null
    }
  const itineraryObj = itinerary.trip_segments.map((segment) => (
    <ItinerarySegment key={segment.start_date} {...segment} />
  ));

  return <div className='w-screen max-w-md'>{itineraryObj}</div>;
}
