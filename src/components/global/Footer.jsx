import React from 'react';
import { PiTiktokLogoFill } from 'react-icons/pi';
import { GrTwitter } from 'react-icons/gr';
import { TfiYoutube } from 'react-icons/tfi';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import Link from 'next/link';

const navLinks = [
    {
        label: 'Company',
        options: [
            {
                label: 'About Us',
                link: '/about_us'
            },
            {
                label: 'About Us',
                link: '/about_us'
            },
            {
                label: 'Annual Letter',
                link: '/annualletter'
            },
            {
                label: 'Blog',
                link: '/blog'
            },
            {
                label: 'Buyers Guide',
                link: '/buyers_guide'
            },
            {
                label: 'Careers',
                link: '/careers'
            },
            {
                label: 'Condo-Coop Guide',
                link: '/sellers_guide'
            },
            {
                label: 'ID Lab',
                link: '/id-lab'
            },
            {
                label: 'Market Knowledge',
                link: '/market_knowledge'
            },
            {
                label: 'Neighborhoods',
                link: '/neighborhoods'
            },
            {
                label: 'New Development',
                link: '/new_development'
            },
            {
                label: 'People',
                link: '/people'
            },
            {
                label: 'Press',
                link: '/press'
            },
            {
                label: 'Referrals',
                link: '/referrals'
            },
            {
                label: 'Shop',
                link: 'https://shop.serhant.com/'
            },
            {
                label: 'Signature',
                link: '/about_us'
            },
            {
                label: 'Teams',
                link: '/teams'
            },
        ]
    },
    {
        label: 'Studios',
        options: [
            {
                label: 'Videos',
                link: 'https://www.youtube.com/c/serhant'
            },
            {
                label: 'Studios',
                link: '/studios'
            }
        ]
    },
    {
        label: 'Ryan Serhant',
        options: [
            {
                label: "Ryan's Personal Site",
                link: 'https://ryanserhant.com/'
            },
        ]
    },
    {
        label: 'Ventures',
        options: [
            {
                label: 'Books',
                link: 'https://ryanserhant.com/sell-it-like-serhant-the-book/'
            },
            {
                label: 'Course',
                link: '/course'
            },
            {
                label: 'Ventures',
                link: '/ventures'
            }
        ]
    }
]

const socialIcons = [
    {
        label: 'tiktok',
        icon: <PiTiktokLogoFill className='w-8 h-8 text-gray-400 cursor-pointer hover:text-[#141176]' />
    },
    {
        label: 'twitter',
        icon: <GrTwitter className='w-8 h-8 text-gray-400 cursor-pointer hover:text-[#141176]' />
    },
    {
        label: 'youtube',
        icon: <TfiYoutube className='w-8 h-8 text-gray-400 cursor-pointer hover:text-[#141176]' />
    },
    {
        label: 'facebook',
        icon: <BsFacebook className='w-8 h-8 text-gray-400 cursor-pointer hover:text-[#141176]' />
    },
    {
        label: 'linkedin',
        icon: <BsLinkedin className='w-8 h-8 text-gray-400 cursor-pointer hover:text-[#141176]' />
    },
    {
        label: 'instagram',
        icon: <BsInstagram className='w-8 h-8 text-gray-400 cursor-pointer hover:text-[#141176]' />
    },
]

const bottomNavLinks = [
    {
        label: 'Terms of use',
        link: '/terms_of_use'
    },
    {
        label: 'Privacy Policy',
        link: '/privacy'
    },
    {
        label: 'Other Important Disclosures',
        link: '/legal_disclosures'
    },
    {
        label: 'Fair Housing Statement',
        link: '/fair_housing_statement'
    },
    {
        label: 'NY Standard Operating Procedures',
        link: 'https://www.serhant.com/SERHANT.%20SOP.pdf'
    },
    {
        label: 'NY Fair Housing Notice',
        link: 'https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf'
    },
    {
        label: 'NY Reasonable Accommodations Notice for Prospective Tenants',
        link: 'https://www.serhant.com/Reasonable%20Accommodations%20Notice.pdf'
    },
]


const Footer = () => {
    return (
        <div className='px-9 lg:px-24 flex flex-col mt-10'>
            <div className='flex flex-col md:flex-row justify-between gap-10'>
                {/* left side nav links Start*/}
                <div className='flex flex-row md:flex-col lg:flex-row md:gap-10 lg:gap-20 justify-center'>

                    <ul className='border border-r-2 pr-8 border-l-0 border-t-0 border-b-0 border-gray-100 md:border-none md:border-r-0'>
                        {
                            navLinks.filter((navLink) => navLink.label === 'Company' ).map((navLink, index) => (
                                <li key={index}>
                                    <h5 className=' text-black font-semibold text-lg'>{navLink.label}</h5>
                                    <ul className='flex flex-col gap-4 mt-4'>
                                        {
                                            navLink.options.map((option, index) => (
                                                <li key={index}>
                                                    <a href={option.link} className='text-gray-600 text-lg'>{option.label}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>

                    <ul className='flex flex-col gap-6 pl-10 md:pl-0'>
                        {
                            navLinks.filter((navLink) => navLink.label === 'Studios' ).map((navLink, index) => (
                                <li key={index}>
                                    <h5 className=' text-black font-semibold text-lg'>{navLink.label}</h5>
                                    <ul className='flex flex-col gap-4 mt-4'>
                                        {
                                            navLink.options.map((option, index) => (
                                                <li key={index}>
                                                    <a href={option.link} className='text-gray-600 text-lg'>{option.label}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                        
                        {
                            navLinks.filter((navLink) => navLink.label === 'Ryan Serhant' ).map((navLink, index) => (
                                <li key={index}>
                                    <h5 className=' text-black font-semibold text-lg'>{navLink.label}</h5>
                                    <ul className='flex flex-col gap-4 mt-4'>
                                        {
                                            navLink.options.map((option, index) => (
                                                <li key={index}>
                                                    <a href={option.link} className='text-gray-600 text-lg'>{option.label}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                        {
                            navLinks.filter((navLink) => navLink.label === 'Ventures' ).map((navLink, index) => (
                                <li key={index}>
                                    <h5 className=' text-black font-semibold text-lg'>{navLink.label}</h5>
                                    <ul className='flex flex-col gap-4 mt-4'>
                                        {
                                            navLink.options.map((option, index) => (
                                                <li key={index}>
                                                    <a href={option.link} className='text-gray-600 text-lg'>{option.label}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* left side nav links end*/}

                {/* right side nav links start */}
                <div className=' flex flex-col justify-between'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-2xl font-bold text-center md:text-start'>The Best Minds in <br className='hidden md:block' /> Real Estate, <br className='hidden md:block' /> In Your Inbox.</h2>
                        <h2 className='text-lg md:text-2xl text-center text-gray-400'>Get the latest from the <strong>SERHANT</strong>. Universe</h2>

                        <div className='flex items-center gap-5 mt-0 md:mt-10 pb-6'>
                            <label htmlFor="email" className=' text-gray-400 font-bold text-2xl pr-5 hidden md:block'>Email</label>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    className=" hidden md:block w-full border-t-0 border-r-0 border-l-0 border-b-[3px] pl-0 border-[#141176] focus:border-[#141176] focus:ring-0 outline-none"
                                    placeholder=""
                                />
                                <input type="text" className='block md:hidden w-full' placeholder='Email' />
                                <button className="absolute -bottom-10 md:bottom-2 right-0 text-[#141176] font-bold text-xl flex items-center gap-2">Subscribe <BiRightArrowAlt className="text-[#141176]" /> </button>
                            </div>
                        </div>

                        <ul className='flex gap-5 justify-end my-5'>
                            {
                                socialIcons.map((icon, index) => (
                                    <li key={index}>
                                        {icon.icon}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='flex justify-end mb-5'>
                        <button className='underline-animation text-xl font-bold py-1 hover:text-gray-400'>Login</button>
                    </div>

                </div>
                {/* right side nav links end */}
            </div>

            
            <div className='flex justify-center flex-col items-center gap-5 pb-28 max-w-7xl mx-auto'>
                <h1 className='text-5xl font-extrabold text-[#141176] lg:text-8xl' >SERHANT.</h1>
                <p>© 2023 Serhant LLC. All Rights Reserved.</p>
                <div className='flex flex-col gap-3 text-center px-10'>
                    <p className='text-center leading-10'>Serhant LLC is a licensed real estate broker, licensed to do business in New York. No guarantee, warranty or representation of any kind is made regarding the completeness or accuracy of descriptions or measurements (including square footage measurements and property condition), which should be independently verified, and Serhant LLC expressly disclaims any liability in connection therewith. No financial or legal advice provided. Serhant LLC and its affiliates fully support the principles of the Fair Housing Act and the Equal Opportunity Act.</p>
                    <p>Serhant LLC and its affiliates do not discriminate against voucher holders pursuant to applicable law.</p>
                    <p>New York State License Number: 10991233724</p>
                    <p>Serhant Florida LLC d/b/a SERHANT. License Number: CQ1065037</p>
                </div>
                
                <ul className='flex gap-3 flex-wrap justify-center'>
                    {
                        bottomNavLinks.map((link, index) => (
                            <div key={index}>
                                <Link href={link.link} className='underline-animation text-sm font-bold py-1 hover:text-gray-400'>{link.label}</Link>
                                <span className=' last:hidden'> | </span>
                            </div>
                        ))
                    }
                </ul>
            </div>

        </div>
    );
};

export default Footer;