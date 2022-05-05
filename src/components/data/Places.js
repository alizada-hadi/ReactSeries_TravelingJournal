import React from 'react'
import Card from '../ui/Card'
import places from '../../data'

export default function Places() {
    const favPlaces = places.map(place => {
        return (
            <Card 
                image={place.image}
                location={place.location}
                googleMapURL={place.googleMapURL}
                startDate={place.startDate}
                endDate={place.endDate}
                title={place.title}
                description={place.description}
            />
        )
    })
    return (
    <div className='container max-w-4xl m-auto mt-10'>
        {favPlaces}
    </div>
  )
}
