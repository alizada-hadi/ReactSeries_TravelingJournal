import React from 'react'

export default function Card(props) {
    const {
        image, 
        title, 
        location, 
        googleMapURL, 
        startDate, 
        endDate,
        description
    } = props
  return (
    <div>
        <a href="#" class="flex flex-col mx-2 items-center my-3 bg-white rounded-lg border shadow-md md:flex-row xl:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
            
            <div class="flex flex-col justify-between p-4 leading-normal">
                <span className='mb-3 flex text-red-400 text-xl'><ion-icon name="location-outline"></ion-icon>
                <span className='text-sm ml-2 text-black uppercase '>{location}</span>

                <a href='{googleMapURL}' className='ml-20 underline text-gray-500 text-sm'>View on Google Maps</a>
                </span>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <span className='mb-2'>{startDate} - {endDate}</span>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </a>
    </div>
  )
}
