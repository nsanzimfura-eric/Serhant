import SelectRegion from '@/utils/SelectRegion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';


const headerLinks = [
    {
        link: '/newDevelopments',
        label: 'New development'
    },
    {
        link: '/listings',
        label: 'Buy'
    },
    {
        link: '/sell',
        label: 'Sell'
    },
    {
        link: '/rent',
        label: 'Rent'
    },
    {
        link: '/referrals',
        label: 'REFERRALS'
    },
    {
        link: '/people',
        label: 'PEOPLE'
    },
    {
        link: '/studios',
        label: 'STUDIOS'
    },
    {
        link: '/market_knowledge',
        label: 'MARKET KNOWLEDGE'
    },
    {
        link: '/adx',
        label: 'ADX'
    }
]

const dropdownRegions = [
    {
        name: 'All regions',
    },
    {
        name: 'New York City',
    },
    {
        name: 'Hamptons',
    },
    {
        name: 'Long Island',
    },
    {
        name: 'Connecticut',
    },
    {
        name: 'Pennsylvania',
    },
    {
        name: 'North Carolina',
    },
    {
        name: 'South Carolina',
    },
    {
        name: 'New Jersey',
    },
]

const Header = ({globalData}) => {
    const router = useRouter();
    const { asPath } = router;

    const [openMenu, setOpenMenu] = useState(false);

    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 170) {
        setScrolling(true);
        } else {
        setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='flex justify-center flex-col'>


            {/* Navbar when scrolling start*/}
                <div className={`px-24 hidden lg:flex items-center justify-around fixed top-0 w-full z-50 bg-white p-5 transition-opacity duration-300 ease-in-out ${scrolling ? 'opacity-100' : 'opacity-0 hidden'}`}>
                        <Link href={'/'} className='text-[#141176] text-6xl font-extrabold pr-10'>S.</Link>
                        <SelectRegion dropdownRegions={dropdownRegions} />

                        <ul className={`flex flex-col lg:flex-row flex-wrap justify-center items-start lg:items-center gap-5`}>
                                {
                                    headerLinks.map((link, i) => 
                                    <li key={i}>
                                            <Link className='uppercase' href={link.link}>{link.label}</Link>
                                    </li>
                                    )
                                }
                        </ul>

                        <div className='flex gap-3 items-center flex-col-reverse lg:flex-row mt-3 lg:mt-0'>
                            <button className='text-[#141176] font-extrabold -ml-5 lg:ml-0 w-20'> JOIN US </button>
                            <button className='text-[#141176] font-extrabold flex items-center gap-2 cursor-pointer'> <PiMagnifyingGlassLight />  SEARCH </button>
                        </div>
                </div>
            {/* Navbar when scrolling end*/}

            
            {
                asPath === '/' &&
                <div className='bg-[#141176] text-white h-11 flex justify-center items-center'>
                    <p>Click <Link href={'https://www.serhantannualletter2022.com/'} className=' underline font-semibold'>here</Link> to read Ryan Serhant's Annual letter.</p>
                </div>
            }

            

            {/* Header Navbar Start */}
            <div className={`fixed top-0 w-full z-50 lg:sticky flex flex-col justify-start items-center p-5 bg-white ${openMenu ? 'h-screen inset-0 ' : '' }`}>

                <div className='flex items-center justify-between w-full px-3'>

                    <div className='flex flex-col sm:flex-row w-2/3 justify-between lg:justify-center lg:w-full'>
                        <div className='block lg:hidden'>
                            <SelectRegion dropdownRegions={dropdownRegions} />
                        </div>
                        <Link href={'/'} className='text-5xl font-extrabold text-[#141176] lg:text-8xl'>SERHANT.</Link>
                    </div>

                    <div className=' block lg:hidden'>
                        {
                            openMenu ?  <AiOutlineClose className='font-bold w-7 h-7' onClick={()=>setOpenMenu(false)} /> : <RxHamburgerMenu className='font-bold w-7 h-7' onClick={()=>setOpenMenu(true)} />
                        }
                    </div>
                </div>
                

                <div className={`${openMenu ? 'flex flex-col' : 'hidden' } lg:flex gap-6 items-center  px-4`}>
                    {/* Left side dropdown */}
                    <div className='hidden lg:block'>
                        <SelectRegion dropdownRegions={dropdownRegions} />
                    </div>


                    <div className='flex flex-col-reverse lg:flex-row gap-6 items-start lg:items-center mt-4 lg:mt-0 w-full'>
                        {/* Middle links */}
                        <ul className={`flex flex-col lg:flex-row flex-wrap justify-center items-start lg:items-center gap-5`}>
                            {
                                headerLinks.map((link, i) => 
                                <li key={i}>
                                        <Link className='uppercase' href={link.link}>{link.label}</Link>
                                    </li>
                                )
                            }
                        </ul>

                        {/* Right side buttons */}
                        <div className='flex gap-3 items-center flex-col-reverse lg:flex-row mt-3 lg:mt-0'>
                            <button className='text-[#141176] font-extrabold -ml-5 lg:ml-0 w-20'> JOIN US </button>
                            <button className='text-[#141176] font-extrabold flex items-center gap-2 cursor-pointer'> <PiMagnifyingGlassLight />  SEARCH </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* Header Navbar End */}

        </div>
    );
};

export default Header;