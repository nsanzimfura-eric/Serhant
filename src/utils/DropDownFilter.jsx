import { useState } from 'react';
import { MdKeyboardArrowDown, MdSearch } from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';


const menuOptions = [
    {
        name: 'Manhattan',
        places: [
          {
            name: 'All Downtown',
            places: [
              {
                name: 'Chelsea'
              },
              {
                name: 'Chinatown'
              },
              {
                name: 'Little Italy'
              }
            ]
          },
          {
            name: 'All Midtown',
            places: [
              {
                name: 'Beekman'
              },
              {
                name: 'Central Park South'
              },
              {
                name: 'Kips Bay'
              }
            ]
          },
          {
            name: 'All Upper East Side',
            places: [
              {
                name: 'Lenox Hill'
              },
              {
                name: 'Yorkville'
              },
              {
                name: 'Upper East Side'
              }
            ]
          },
          {
            name: 'All Upper Manhattan',
            places: [
              {
                name: 'East Harlem'
              },
              {
                name: 'Fort George'
              },
              {
                name: 'Harlem'
              }
            ]
          },
          {
            name: 'All Upper West Side',
            places: [
              {
                name: 'Lincoln Square'
              },
              {
                name: 'Manhattan Valley'
              },
              {
                name: 'Upper West Side'
              }
            ]
          },
        ]
    },
    {
      name: 'Queens',
      places: [
        {
          name: 'Central Queens',
          places: [
            {
              name: 'Corona'
            },
            {
              name: 'Elmhurst'
            },
            {
              name: 'Forest Hills'
            }
          ]
        },
        {
          name: 'Northeastern Queens',
          places: [
            {
              name: 'Bayside'
            },
            {
              name: 'Bay Terrace'
            },
            {
              name: 'Clearview'
            }
          ]
        },
        {
          name: 'The Bronx'
        }
      ]
    }
]


function MenuItem({ option }) {
  const [openFirstStep, setOpenFirstStep] = useState(false);
  const [openSecondStep, setOpenSecondStep] = useState({});

  const toggleSecondStep = (placeName) => {
    setOpenSecondStep((prevOpenSecondStep) => ({
      ...prevOpenSecondStep,
      [placeName]: !prevOpenSecondStep[placeName] || false,
    }));
  };
  

  return (
      <Menu.Item>
        {({ active }) => (
          <button
            className={`${
              active ? '' : ''
            } text-black group flex w-full flex-col gap-4 items-center justify-center p-3 text-base`}
          >
            <div className='flex items-center justify-between w-full'>
                <MdKeyboardArrowDown
                    onClick={()=>setOpenFirstStep(!openFirstStep)}
                    className={`w-5 h-5 transition-transform transform ${
                      openFirstStep ? 'rotate-180' : ''
                    } ${option.places?.length > 0 ? 'block' : 'hidden'}`}
                />
              <div className='flex justify-between items-center w-full'>
                <label htmlFor="">{option.name}</label>
                <input type="checkbox" />
              </div>
            </div>
            {option.places?.length > 0 && (
              <div
                className={`ml-3 transition-all duration-300 ${
                  openFirstStep ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {option.places?.map((place, index) => (
                  <div key={index} className='w-full flex flex-col gap-4'>
                    <div className='flex justify-between items-center w-full'>
                        <MdKeyboardArrowDown
                            onClick={() => toggleSecondStep(place.name)}
                            className={`w-5 h-5 transition-transform transform ${
                              openSecondStep[place.name] ? 'rotate-180' : ''
                            } ${place.places?.length > 0 ? 'block' : 'hidden'}`}
                        />
                      <div className='flex justify-between items-center w-full '>
                        <label htmlFor={place.name}>{place.name}</label>
                        <input type="checkbox" name={place.name} />
                      </div>
                    </div>
                    {place.places?.length > 0 && (
                      <div
                          className={`ml-5 transition-all duration-300 ${
                            openSecondStep[place.name] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                          } overflow-hidden flex flex-col gap-4 mb-4`}
                      >
                        {place.places?.map((subPlace, subIndex) => (
                          <div key={subIndex} className='flex justify-between items-center'>
                            <label htmlFor={subPlace.name}>{subPlace.name}</label>
                            <input type="checkbox" name={subPlace.name} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </button>
        )}
      </Menu.Item>
  );
}

function DropDownFilter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className='relative'>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MdSearch className="h-5 w-5 text-gray-400 rotate-45" /> 
        </div>
        <input
          className="w-full h-[57px] pl-10 inline-flex border-[.5px] border-neutral-400 justify-center px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          type="text"
          placeholder="Places"
          onClick={toggleDropdown}
        />
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menuOptions.map((option, index) => (
            <MenuItem key={index} option={option} />
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDownFilter;
