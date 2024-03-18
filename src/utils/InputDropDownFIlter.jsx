import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {MdKeyboardArrowDown} from 'react-icons/md';


function InputDropDownFilter({buttonText, inputName}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className='border-[.5px] border-neutral-400'>
                <Menu.Button onClick={toggleDropdown} className="inline-flex w-full h-14 border-none items-center justify-evenly gap-x-1.5 bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50">
                    {buttonText}
                    <MdKeyboardArrowDown className={`w-7 h-7 transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute border left-0 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        
                        {
                            buttonText === 'Type' ? (
                            <div className='flex flex-col p-5 gap-4'>
                                <div className=' flex flex-col gap-4'>
                                    <p>Property</p>
                                    <div className='ml-5 flex flex-col gap-4'>
                                        <div className='flex justify-between items-center'>
                                            <label htmlFor="condo">Condo</label>
                                            <input type="checkbox" name='condo' />
                                        </div>
                                        <div className=' flex justify-between items-center'>
                                            <label htmlFor="co-op">Co-op</label>
                                            <input type="checkbox" name='co-op' />
                                        </div>
                                        <div className=' flex justify-between items-center'>
                                            <label htmlFor="townhouse">Townhouse</label>
                                            <input type="checkbox" name='townhouse' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p>Listing Type</p>
                                    <div className=' ml-5 flex justify-between items-center'>
                                        <label htmlFor="newDevelopment">New Development</label>
                                        <input type="checkbox" name='newDevelopment' />
                                    </div>
                                </div>
                            </div>
                            
                            ) : (
                                <>
                                    <Menu.Item>
                                        <div className='flex flex-col p-4 justify-center items-center'>
                                            <label htmlFor={`min${inputName}`}>Min {inputName}</label>
                                            <input type='text' placeholder='-' className='' name='minBeds' onClick={(e) => e.stopPropagation()} />
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <div className='flex flex-col p-4 justify-center items-center'>
                                            <label htmlFor={`max${inputName}`}>Max {inputName}</label>
                                            <input type='text' placeholder='-' className='' name='maxBeds' onClick={(e) => e.stopPropagation()} />
                                        </div>
                                    </Menu.Item>
                                </>
                            )
                        }
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default InputDropDownFilter;
