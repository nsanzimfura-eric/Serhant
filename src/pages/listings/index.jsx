import Listing from '@/blocks/Listing/Listing';
import ListingFilter from '@/blocks/ListingFilter/ListingFilter';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const listings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/listings');
            setListings(res.data.docs);
        })()
    
    }, []);

    console.log('listings', listings);


    return (
        <section>
            {/* Listing Filter Bar */}
            <ListingFilter />
            {/* Listing Filter Bar */}

            {/* Listings */}
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-0 sm:px-24'>
                {
                    listings?.map((el)=> 
                        <Listing el={el} key={el.id} />
                    )
                }
            </ul>
            {/* Listings */}
        </section>
    );
};

export default listings;