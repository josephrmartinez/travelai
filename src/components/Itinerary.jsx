import { Activity } from '@phosphor-icons/react'
import { useState } from 'react'

const response =
    {
        "trip_segments": [
            {
                "dates": {
                    "start_date": "Oct 26, 2023",
                    "end_date": "Oct 31, 2023"
                },
                "location": "Santa Fe, New Mexico",
                "travel_information": "Fly into Santa Fe Municipal Airport (SAF), located approximately 15 minutes from downtown Santa Fe. You can arrange a private transfer or take a taxi to your hotel.",
                "accommodation_details": "Stay at The Inn of the Five Graces, a luxurious boutique hotel known for its unique decor and warm ambiance. The hotel offers spacious rooms with authentic southwestern design elements and a serene courtyard.",
                "activities": [
                    "Explore the historic Santa Fe Plaza and its surrounding adobe architecture. Don't miss the Palace of the Governors, which houses the New Mexico History Museum.",
                    "Take a leisurely hike in the nearby Sangre de Cristo Mountains. The Aspen Vista Trail offers beautiful fall foliage and panoramic views of the city.",
                    "Visit the Santa Fe Farmers Market to experience local produce and artisanal goods. The market is open on Saturdays and Tuesdays and is a great place to sample regional flavors.",
                    "Participate in a cooking class to learn about the region's culinary traditions. The Santa Fe School of Cooking offers hands-on classes where you can create dishes using local ingredients and spices."
                ]
            },
            {
                "dates": {
                    "start_date": "Nov 1, 2023",
                    "end_date": "Nov 5, 2023"
                },
                "location": "Moab, Utah",
                "travel_information": "Drive from Santa Fe to Moab (approximately 6.5 hours) through scenic landscapes. Consider taking Highway 191, which offers stunning views of the Colorado Plateau.",
                "accommodation_details": "Stay at the Sorrel River Ranch Resort and Spa, nestled along the Colorado River with stunning views of red rock canyons. The resort offers comfortable rooms and various outdoor activities.",
                "activities": [
                    "Explore Arches National Park and hike to iconic landmarks like Delicate Arch and Landscape Arch. The Devil's Garden Trail is a great option for experiencing a variety of arches.",
                    "Take a sunset hike in the lesser-known Fisher Towers area for unique rock formations and panoramic views. The Fisher Towers Trail is a moderate hike with breathtaking scenery.",
                    "Embark on a guided off-road tour through the rugged terrain of Canyonlands National Park. This allows you to access remote areas and enjoy the park's diverse landscapes.",
                    "Indulge in a culinary adventure with a visit to local farm-to-table restaurants showcasing the region's flavors. The Desert Bistro and the Sunset Grill offer exquisite dining experiences."
                ]
            }
        ]
}
    

const itineraryObj = response.trip_segments.map(each => {
    const activities = each.activities.map(activity => {
        return (
            <div>- {activity}</div>
        )
        
    })

    return (
        <div className='outline p-4 m-4 rounded-md'>
            <div className='flex flex-row w-full justify-between mb-4'>
            <div>{each.dates.start_date} - {each.dates.start_date}</div>
            <div>{each.location}</div>
            </div>
            <div className='mb-4'>{each.travel_information}</div>
            <div>Accomodation:</div>
            <div className='mb-4'>{each.accommodation_details}</div>
            <div>Activities:</div>
            <div>{activities}</div>
        </div>
    )
})

export default function Itinerary() {
    return (
        <div>
            {itineraryObj}
        </div>

    )
}