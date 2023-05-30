import { useState } from 'react'
import './App.css'
import SinglePageForm from './components/SinglePageForm';
import Itinerary from './components/Itinerary';


const starterData =
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

const vancouver = {
  "trip_segments": [
    {
      "start_date": "2023-07-26",
      "end_date": "2023-07-29",
      "location": "Vancouver",
      "travel_information": "Fly into Vancouver International Airport. Take a taxi or shuttle to the hotel.",
      "accommodation_details": "Stay at the Fairmont Pacific Rim hotel in a room with an ocean view.",
      "activities": [
        "Visit Stanley Park and go for a nature walk",
        "Relax on English Bay Beach",
        "Dine at Miku, a Japanese restaurant known for its sushi and ocean views"
      ]
    },
    {
      "start_date": "2023-07-29",
      "end_date": "2023-08-01",
      "location": "Tofino",
      "travel_information": "Take a seaplane from Vancouver to Tofino.",
      "accommodation_details": "Stay at the Wickaninnish Inn in a room with a beach view.",
      "activities": [
        "Hike the Wild Pacific Trail and take in the ocean views",
        "Relax on Chesterman Beach",
        "Take a culinary tour of the local seafood restaurants"
      ]
    },
    {
      "start_date": "2023-08-01",
      "end_date": "2023-08-05",
      "location": "Powell River",
      "travel_information": "Drive or take a ferry from Tofino to Powell River.",
      "accommodation_details": "Stay at the Beach Gardens Resort and Marina in a room with a beach view.",
      "activities": [
        "Explore the Powell Forest Canoe Route",
        "Relax on Willingdon Beach",
        "Visit the Powell River Farmers Market and try local produce"
      ]
    },
    {
      "start_date": "2023-08-05",
      "end_date": "2023-08-08",
      "location": "Sunshine Coast",
      "travel_information": "Take a ferry from Powell River to the Sunshine Coast.",
      "accommodation_details": "Stay at the Rockwater Secret Cove Resort in a tenthouse with an ocean view.",
      "activities": [
        "Hike to Skookumchuck Narrows",
        "Relax in the outdoor spa at the resort",
        "Take a cooking class at Gibsons Public Market and learn local cuisine"
      ]
    },
    {
      "start_date": "2023-08-08",
      "end_date": "2023-08-11",
      "location": "Vancouver",
      "travel_information": "Take a ferry back to Vancouver.",
      "accommodation_details": "Stay at the Fairmont Pacific Rim hotel in a suite with an ocean view.",
      "activities": [
        "Visit Granville Island and try local artisanal food",
        "Relax on Kitsilano Beach",
        "Take a guided nature hike through Capilano Suspension Bridge Park"
      ]
    }
  ]
}


function App() {
  const [itinerary, setItinerary] = useState(starterData)
  

  return (
    <div className='flex flex-col items-center'> 
      <SinglePageForm setItinerary={setItinerary} />
      <div className='mb-12'>
        <Itinerary itinerary={itinerary} />
      </div>
    </div>
    
  )
}

export default App
