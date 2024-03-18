import React from 'react';
import Link from 'next/link';


const Listing = ({el}) => {
    return (
        <div 
            key={el.id}
            className={`h-[550px] lg:max-w-[400px] relative group cursor-pointer`}
            style={{ backgroundImage: `url(${el.images[0].image.url ? el.images[0].image.url : '/public/assets/marla-prusik-5q1KnUjtjaM-unsplash.jpg' })`, backgroundSize: 'cover', backgroundPosition: 'center center',}}
        >
            <p className={`bg-black absolute top-8 p-3 text-center w-[70%] last:w-full text-white`}>{el.type}</p>
            <div className='hidden md:block text-white group-hover:hidden p-5 absolute bottom-0 bg-black bg-opacity-50 w-full'>
                <h4 className='text-xl font-bold'>{el.title}</h4>
                <p className='text-lg'>{el.price}</p>
            </div>
            <div className='p-10 md:p-0 block md:hidden group-hover:flex gap-10 absolute inset-x-0 bottom-0 bg-black bg-opacity-25 text-white flex-col items-center justify-center custom-transform fill-shade'>
                <div className='flex justify-start mt-14 md:mt-0 md:justify-center flex-wrap w-[50%] gap-1 text-2xl'>
                    <p>{el.address.houseNumber}, </p>
                    <p>{el.address.street}, </p>
                    <p>{el.address.region}, </p>
                    <p>{el.address.zipCode}, </p>
                    <p>{el.address.country}</p>
                </div>

                <div className='flex flex-col mt-10 md:mt-0 items-start md:items-center justify-center w-[50%] gap-1'>
                    <p>$ {el.price}</p>
                    <p>{el.rooms} Rooms</p>
                    <p>{el.bathrooms} Bathrooms</p>
                    <p>{el.squireMeter} SQMT</p>
                </div>

                <div className='absolute bottom-10'>
                    <Link href={`/listings/${el.id}`} className='underline-animation text-white hover:text-neutral-300 text-xl before:bg-white'>
                        See More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Listing;