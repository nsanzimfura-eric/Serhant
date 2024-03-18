import ListingFilter from '@/blocks/ListingFilter/ListingFilter';
import Development from '@/blocks/Development/Development';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const newDevelopments = () => {
    const [developments, setDevelopments] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/development');
            setDevelopments(res.data.docs);
        })()
    
    }, []);

    return (
        <section>
            <div className='flex flex-col gap-16 px-16 lg:px-24 my-20'>
                <h3 className='text-2xl'> <strong>SERHANT.</strong> New Development</h3>
                <p className=' leading-7'>New marketplace. New rules. <strong>SERHANT.</strong> New Development gives developers and financial institutions an unmatched advantage by providing insightful, and results-oriented, step-by-step guidance and support from site acquisition to final sellout for projects of all sizes, price points, and locations. We use comprehensive market analytics to hone our planning, design, and branding strategies, and we leverage <strong>SERHANT.</strong> Studios and ID Lab to deliver potent, breakthrough content and sales campaigns that are targeted and amplified through <strong>SERHANT.</strong> ADX, our tech-powered innovation platform.</p>
                <button className='underline-animation before:bg-[#141176] font-bold text-xl w-56'>Learn More About Us</button>
            </div>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-0 sm:px-24'>
                {
                    developments?.map((el)=> 
                        <Development el={el} key={el.id} />
                    )
                }
            </ul>
        </section>
    );
};

export default newDevelopments;