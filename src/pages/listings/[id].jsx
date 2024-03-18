import FeaturesSection from '@/blocks/FeaturesSection/FeaturesSection';
import LifeStyleIndex from '@/blocks/LifeStyleIndex/LifeStyleIndex';
import RichTextParser from '@/components/RichTextParser';
import ListingPageCarousel from '@/utils/ListingPageCarousel';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { GiDoorHandle } from 'react-icons/gi';
import { MdOutlineBathtub } from 'react-icons/md';
import { TbRulerMeasure } from 'react-icons/tb';

const listing = () => {
    const router = useRouter();
    const { id } = router.query;
    const [listing, setListing] = useState({});

    console.log('listing', listing);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`/api/listings/${id}`);
            setListing(res.data)
        })();

    },[id]);


    return (
        <section>
            <section className='grid bg-black grid-cols-1 lg:grid-cols-2 gap-10 justify-center w-full h-full'>
                <div className='w-full h-full max-w-2xl mx-auto px-0 lg:px-10 lg:pl-20 xl:px-24'>
                    <ListingPageCarousel data={listing} />
                </div>


                <div className='flex flex-col gap-10 md:py-20 items-center px-14 lg:px-20'>
                    <div className=' hidden md:flex justify-start mt-14 md:mt-0 flex-wrap gap-1 text-4xl text-white'>
                        <p>{listing?.address?.houseNumber}, </p>
                        <p>{listing?.address?.street}, </p>
                        <p>{listing?.address?.region}, </p>
                        <p>{listing?.address?.zipCode}, </p>
                        <p>{listing?.address?.country}</p>
                    </div>

                    <div className=' flex flex-col-reverse md:flex-col gap-8'>
                        <div className='flex text-white flex-col md:flex-row'>
                            <div className='flex flex-col justify-center items-center py-4 md:py-0 md:pr-10 gap-6 border-b md:border-b-0 md:border-r border-white'>
                                <GiDoorHandle className=' w-16 h-16 -mr-5' />
                                <p className=' text-2xl'>{listing?.rooms}</p>
                                <p>Rooms</p>
                            </div>
                            <div className=' flex flex-col justify-center items-center py-4 md:py-0 px-10 gap-6 border-b md:border-b-0 md:border-r border-white'>
                                <MdOutlineBathtub className=' w-16 h-16' />
                                <p className=' text-2xl'>{listing?.bathrooms}</p>
                                <p>Bathrooms</p>
                            </div>
                            <div className=' flex flex-col justify-center items-center py-4 md:py-0 px-10 gap-6'>
                                <TbRulerMeasure className=' w-16 h-16' />
                                <p className=' text-2xl'>{listing?.squireMeter}</p>
                                <p>SQMT</p>
                            </div>
                        </div>
                        <div 
                            className={`w-44 h-[310px] flex flex-col justify-end p-5`}
                            style={{ backgroundImage: `url(${listing.realtor?.image?.url})`, backgroundSize: 'cover', backgroundPosition: 'center center',}}
                        >
                            <Link href={'/'} className='underline-animation before:bg-white text-white font-semibold'>{listing.realtor?.name}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* lifeStyleIndex Section */}
            <section className='px-16 lg:px-24 py-20 bg-black text-white'>
                <LifeStyleIndex lifeStyleIndex={listing.lifeStyleIndex} />
            </section>
            {/* lifeStyleIndex Section */}

            {/* Property Details */}
            <section className='px-16 lg:px-24 py-20 bg-black text-white'>
                <RichTextParser content={listing?.description} />
            </section>
            {/* Property Details */}

            {/* Features Section */}
            <section className='px-16 lg:px-24 py-20 bg-black text-white'>
                <FeaturesSection features={listing.features} />
            </section>
            {/* Features Section */}

            
        </section>
    );
};

export default listing;