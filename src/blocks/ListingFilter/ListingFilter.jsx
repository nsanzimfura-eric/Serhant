import React, { useState } from 'react';
import DropDownFilter from '@/utils/DropDownFilter';
import InputDropDownFilter from '@/utils/InputDropDownFIlter';

const ListingFilter = () => {
    const [bedsToggle, setBedsToggle] = useState(false);

    return (
        <div className='mt-10 mb-20 grid grid-cols-6 relative z-40'>
            <DropDownFilter />
            <InputDropDownFilter buttonText={'Beds'} inputName={'Beds'} />
            <InputDropDownFilter buttonText={'Baths'} inputName={'Baths'} />
            <InputDropDownFilter buttonText={'Price'} inputName={'Price'} />
            <InputDropDownFilter buttonText={'SQFT'} inputName={'SQFT'} />
            <InputDropDownFilter buttonText={'Type'} inputName={'Type'} />
        </div>
    );
};

export default ListingFilter;