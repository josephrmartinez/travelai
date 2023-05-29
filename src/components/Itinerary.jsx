import { Activity } from '@phosphor-icons/react'
import { useState } from 'react'
import { DateTime } from 'luxon';

const response =
    {
        "trip_segments": [
  {
    "start_date": "2023-06-10",
    "end_date": "2023-06-20",
    "location": "Wellington, New Zealand",
    "travel_information": "Fly into Wellington Airport and take a taxi to the city center.",
    "accommodation_details": "Stay at a camping ground near the waterfront, offering stunning views of the harbor.",
    "activities": [
      "Explore the urban legends and paranormal history of Wellington with a guided ghost tour",
      "Visit the Wellington Night Market for an immersive culinary experience and vibrant nightlife",
      "Hike up to Mount Victoria Lookout for panoramic views of the city at sunset",
      "Take a cable car ride to the Botanic Garden and enjoy a picnic amidst the beautiful surroundings",
      "Experience the thrill of Zorbing at the ZORB Rotorua Adventure Park"
    ]
  },
  {
    "start_date": "2023-06-21",
    "end_date": "2023-07-10",
    "location": "Fiji Islands",
    "travel_information": "Fly from Wellington to Nadi International Airport in Fiji.",
    "accommodation_details": "Stay at a beachfront campsite on one of the stunning islands, offering a perfect blend of adventure and relaxation.",
    "activities": [
      "Embark on a night snorkeling excursion to witness the bioluminescent wonders of the ocean",
      "Join a traditional Fijian Kava ceremony and immerse yourself in the local culture",
      "Explore the hidden gems of the Yasawa Islands, including secluded beaches and secret caves",
      "Go on a ghost ship tour and learn about the haunted history of the region",
      "Join a local village tour and engage in traditional storytelling around a bonfire"
    ]
  },
  {
    "start_date": "2023-07-11",
    "end_date": "2023-08-25",
    "location": "Sydney, Australia",
    "travel_information": "Fly from Fiji to Sydney Kingsford Smith Airport.",
    "accommodation_details": "Stay at a beachside camping site near Bondi Beach, providing a vibrant atmosphere and access to Sydney's nightlife.",
    "activities": [
      "Explore The Rocks, an area known for its historical significance and ghost stories",
      "Visit the iconic Sydney Opera House and attend a thrilling performance",
      "Experience the Sydney Harbour Bridge Climb for breathtaking views of the city skyline at night",
      "Join a pub crawl in the lively neighborhoods of Newtown and Surry Hills",
      "Take a haunted walking tour in the historic district of Millers Point"
    ]
  }
]

}


const ItinerarySegment = ({ start_date, end_date, location, activities, travel_information, accommodation_details }) => {
  const [expanded, setExpanded] = useState(false);
  const startDateFormatted = DateTime.fromISO(start_date).toLocaleString({ month: 'short', day: 'numeric' })
  const endDateFormatted = DateTime.fromISO(end_date).toLocaleString({ month: 'short', day: 'numeric' })

      
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const activityItems = activities.map((activity) => (
    <div key={activity}>- {activity}</div>
  ));

  return (
    <div className='outline m-4 rounded-md w-screen'>
      <div className='flex flex-row w-full justify-between mb-4' onClick={toggleExpand}>
        <div>{startDateFormatted} - {endDateFormatted}</div>
        <div>{location}</div>
      </div>
      {expanded && (
        <>
          <div className='mb-4'>{travel_information}</div>
          <div>Accommodation:</div>
          <div className='mb-4'>{accommodation_details}</div>
          <div>Activities:</div>
          <div>{activityItems}</div>
        </>
      )}
    </div>
  );
};

export default function Itinerary() {
  const itineraryObj = response.trip_segments.map((segment) => (
    <ItinerarySegment key={segment.id} {...segment} />
  ));

  return <div>{itineraryObj}</div>;
}
