import RichTextParser from '@/components/RichTextParser';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const newDevelopment = () => {
    const router = useRouter();
    const { id } = router.query;
    const [ development, setDevelopment ] = useState({});


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`/api/development/${id}`);
                setDevelopment(res.data);
            } catch (error) {
                console.log(error);
            }
        })();
    },[id]);

    console.log('development', development);


    return (
        <section className=' flex flex-col gap-24'>
            <div className='w-full h-[610px] relative'
                style={{ backgroundImage: `url(${development?.images?.[0]?.image?.url})`, backgroundSize: 'cover', backgroundPosition: 'center center',}}
            >
                <p className='px-16 lg:px-24 text-white text-xl font-semibold absolute bottom-20'>{development.title}</p>
            </div>

            <section className='flex px-16 lg:px-24 gap-36 justify-evenly sm:flex-col lg:flex-row'>
                <div className=' w-[40%] max-w-[400px] h-[600px] hidden lg:block'>
                    <img src={development?.images?.[1]?.image?.url} alt={development.title} className='w-full h-full' />
                </div>
                <div className='flex flex-col gap-10'>
                    <div>
                        <h3 className=' text-3xl font-bold'>{development.title}</h3>
                        <h3 className='text-3xl font-bold'>{development?.address?.houseNumber}, {development?.address?.street}</h3>
                    </div>

                    <div>
                        <p className=' text-3xl'>Price Range</p>
                        <p className=' text-3xl font-bold text-[#141176]'>$ {development.priceRange}</p>
                    </div>
                </div>
            </section>

            <section className='bg-neutral-200 px-0 md:px-24 py-10 flex flex-col gap-10'>
                <p className='px-10 md:px-0 text-2xl'>Exclusive Sales Team</p>
                    <div 
                        className={`h-[450px] lg:max-w-[350px] relative group cursor-pointer`}
                        style={{ backgroundImage: `url(${development?.realtor?.image?.url})`, backgroundSize: 'cover', backgroundPosition: 'center center',}}
                        >
                        <div className='hidden md:block text-white group-hover:hidden p-5 absolute bottom-0 bg-black bg-opacity-50 w-full'>
                            <h4 className='text-xl font-bold'>{development?.realtor?.name}</h4>
                        </div>
                        {console.log(development?.realtor)}
                        <div className='p-10 md:p-0 block md:hidden group-hover:flex gap-10 absolute inset-x-0 bottom-0 bg-black bg-opacity-25 text-white flex-col items-center justify-center custom-transform fill-shade'>
                            <div className='flex flex-col items-center justify-start mt-14 md:mt-0 md:justify-center flex-wrap w-[50%] gap-1 text-2xl'>
                                <h4 className='text-xl font-bold'>{development.realtor?.name}</h4>
                                {/* <p>{development?.realtor?.description}</p> */}
                                <RichTextParser content={development?.realtor?.description} />
                            </div>
                            <div className='absolute bottom-10'>
                                <Link href={`/newDevelopments/${development.id}`} className='underline-animation text-white hover:text-neutral-300 text-xl before:bg-white'>
                                    See More
                                </Link>
                            </div>
                        </div>
                    </div>
            </section>
        </section>
    );
};

export default newDevelopment;