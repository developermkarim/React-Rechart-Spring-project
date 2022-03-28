import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
const Benefit = ({allBenefits}) => {
    return (
        <p className='flex items-center flex-nowrap'>
        <CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'> </CheckCircleIcon>
        {allBenefits}
       
       </p>
    );
};

export default Benefit;