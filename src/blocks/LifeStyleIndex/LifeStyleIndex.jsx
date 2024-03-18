import IconComponent from '@/utils/IconComponent';
import React from 'react';

const LifeStyleIndex = ({lifeStyleIndex}) => {

    console.log('lifeStyleIndex', lifeStyleIndex);


    return (
        <div>
            <div className=' flex flex-col gap-5'>
                <h2 className=' font-semibold text-3xl'>Culture. Pets. Culinary. Wellness.</h2>
                <p>Amplifying our listings by providing geo-targeted data insights that matter most.</p>

                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <p className=' font-semibold'>Culture</p>
                        <ul className='flex-wrap'>
                            {
                                lifeStyleIndex?.culture?.map((item, index) => (
                                    <li key={index}> <IconComponent name={item} /> </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <p className=' font-semibold'>Wellness</p>
                        <ul className=' flex-wrap'>
                            {
                                lifeStyleIndex?.wellness?.map((item, index) => (
                                    <li key={index}> <IconComponent name={item} /> </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <p className=' font-semibold'>Pets</p>
                        <ul className=' flex-wrap'>
                            {
                                lifeStyleIndex?.pets?.map((item, index) => (
                                    <li key={index}> <IconComponent name={item} /> </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <p className=' font-semibold'>Culinary</p>
                        <ul className='flex-wrap'>
                            {
                                lifeStyleIndex?.culinary?.map((item, index) => (
                                    <li key={index}> <IconComponent name={item} /> </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeStyleIndex;