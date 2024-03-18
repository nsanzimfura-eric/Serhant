import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';



function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdKeyboardArrowRight className={className} style={{ ...style, display: "block",width: '50px', height: '50px', color: 'black', marginRight: '-20px' }} onClick={onClick} />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdKeyboardArrowLeft className={className} style={{ ...style, display: "block", width: '50px', height: '50px', color: 'black', marginLeft: '-20px' }} onClick={onClick} />

    );
  }


const Carousel = ({data}) => {
    const [slidesToShow, setSlidesToShow] = useState(3);


    useEffect(() => {
        // Define breakpoints based on Tailwind CSS classes
        const breakpoints = {
          sm: 1,  // Small screens (640px)
          md: 2,  // Medium screens (768px)
          lg: 3,  // Large screens (1024px)
          xl: 3,  // Extra-large screens (1280px)
          '2xl': 3, // 2X-Large screens (1536px)
        };
    
        // Check the screen size and update the number of slides to show
        const updateSlidesToShow = () => {
          const screenWidth = window.innerWidth;
    
          if (screenWidth >= 1536) {
            setSlidesToShow(breakpoints['2xl']);
          } else if (screenWidth >= 1280) {
            setSlidesToShow(breakpoints.xl);
          } else if (screenWidth >= 1024) {
            setSlidesToShow(breakpoints.lg);
          } else if (screenWidth >= 768) {
            setSlidesToShow(breakpoints.md);
          } else {
            setSlidesToShow(breakpoints.sm);
          }
        };
    
        // Add an event listener to update slidesToShow when the window size changes
        window.addEventListener('resize', updateSlidesToShow);
    
        // Call the function once to set the initial value
        updateSlidesToShow();
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', updateSlidesToShow);
        };
      }, []);

  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,       
    autoplaySpeed: 5000,
  };


  return (
    <div>
      <Slider {...settings}>
        {
            data.map((item, index) => {
                return (
                    <div key={index} className='flex justify-center '>
                        <div 
                            className={"max-w-[90%] h-[560px] mx-auto last:w-full relative"}
                            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center center',}}
                          >
                            <p className={`${item.status === 'Sold' ? 'bg-[#141176]' : 'bg-black' } absolute top-8 p-3 text-center w-[70%] last:w-full text-white`}>{item.status}</p>
                            <div className='text-white p-5 absolute bottom-0 bg-black bg-opacity-50 w-full'>
                                <h4 className='text-xl font-bold'>{item.title}</h4>
                                <p className='text-lg'>{item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </Slider>
    </div>
  );
};

export default Carousel;

