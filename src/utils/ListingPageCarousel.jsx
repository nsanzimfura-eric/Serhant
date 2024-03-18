import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Listing from '@/blocks/Listing/Listing';
import Image from 'next/image';
import Link from 'next/link';

function NextArrow(props) {
    const { className, style, onClick, isSmallDevice } = props;
    return (
        <MdKeyboardArrowRight className={className} style={{ ...style, display: "block",width: '50px', height: '50px', color: 'white', marginRight: '-20px', visibility: `${isSmallDevice ? 'hidden' : 'visible' }` }} onClick={onClick} />
    );
}

function PrevArrow(props) {
    const { className, style, onClick, isSmallDevice } = props;
    return (
        <MdKeyboardArrowLeft className={className} style={{ ...style, display: "block", width: '50px', height: '50px', color: 'white', marginLeft: '-20px', visibility: `${isSmallDevice ? 'hidden' : 'visible' }` }} onClick={onClick} />
    );
}

const ListingPageCarousel = ({ data }) => {
    const {images, address, price, bathrooms, rooms, squireMeter, id } = data
    const [isSmallDevice, setIsSmallDevice] = useState(false);

    useEffect(() => {
        // Check window width on initial mount
        const checkWindowSize = () => {
            setIsSmallDevice(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        checkWindowSize(); // Check window size on initial mount
        window.addEventListener('resize', checkWindowSize); // Add event listener for window resize

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        nextArrow: <NextArrow isSmallDevice={isSmallDevice} />,
        prevArrow: <PrevArrow isSmallDevice={isSmallDevice} />,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <Slider {...settings}>
                {images?.map((image, index) => {
                    return (
                        <div key={index}>
                            <div className=' hidden md:block'>
                                <img src={image.image.url} className='w-full h-full sm:block lg:hidden' alt={image.image.name} />
                            </div>
                            <div className='h-full w-full block md:hidden relative' >
                                <img src={image.image.url} alt={image.image.name} className='w-full h-full sm:block lg:hidden' />
                                <div className='p-10 md:p-0 block md:hidden group-hover:flex gap-10 absolute inset-x-0 bottom-0 bg-black bg-opacity-25 text-white flex-col items-end justify-end custom-transform fill-shade'>
                                    <div className='absolute bottom-52 flex justify-start mt-14 md:mt-0 md:justify-center flex-wrap w-[50%] gap-1 text-2xl'>
                                        <p>{address.houseNumber}, </p>
                                        <p>{address.street}, </p>
                                        <p>{address.region}, </p>
                                        <p>{address.zipCode}, </p>
                                        <p>{address.country}</p>
                                    </div>

                                    <div className='absolute bottom-20 flex flex-col mt-10 md:mt-0 items-start md:items-center justify-center w-[50%] gap-1'>
                                        <p>$ {price}</p>
                                        <p>{rooms} Rooms</p>
                                        <p>{bathrooms} Bathrooms</p>
                                        <p>{squireMeter} SQMT</p>
                                    </div>

                                    <div className='absolute bottom-10'>
                                        <Link href={`/listings/${id}`} className='underline-animation text-white hover:text-neutral-300 text-xl before:bg-white'>
                                            See More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </Slider>
    );
};

export default ListingPageCarousel;
