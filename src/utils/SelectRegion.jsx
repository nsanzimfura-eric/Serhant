import React from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import {IoChevronDownSharp, IoChevronUpSharp} from 'react-icons/io5'

const SelectRegion = ({ dropdownRegions }) => {
  const [selectedRegion, setSelectedRegion] = useState(dropdownRegions[0]);

  return (
    <Listbox
      value={selectedRegion}
      onChange={setSelectedRegion}
      as="div"
      className="relative"
    >
      {({ open }) => (
        <>
          <Listbox.Button className="text-[#141176] uppercase flex flex-row justify-between items-center pl-0 font-extrabold border-none whitespace-nowrap rounded-md focus:ring-0 w-52">
            {selectedRegion.name}
            {open?<IoChevronUpSharp></IoChevronUpSharp>:<IoChevronDownSharp></IoChevronDownSharp>}
          </Listbox.Button>
          <Listbox.Options className="animate pop absolute top-8 left-0 bg-white cursor-pointer shadow rounded">
            {dropdownRegions.map((region, id) => (
              <Listbox.Option
                key={id}
                value={region}
                className=""
              >
                 {({ active, selected }) => (
                    <div className={`${selected?"bg-gray-200 text-[#141176] font-extrabold rounded-t":"rounded font-semibold hover:bg-gray-100 hover:text-[#141176]"} whitespace-nowrap px-4 py-1 uppercase w-52 `}>{region.name}</div>
                 )}
               
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};

export default SelectRegion;
