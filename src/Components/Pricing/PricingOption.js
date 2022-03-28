import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
// import {CheckCircleIcon} from '@heroicons/react/solid'
import Benefit from './Benefits';

const PricingOption = ({pricingtalbles}) => {
    const {name,Price, Benefits} = pricingtalbles;
    return (
        <div className='bg-indigo-300 p-5 rounded-lg m-3'>
            <h2 className='bg-transparent py-4 rounded text-lg font-bold'>{name}</h2>
            <p>
                 <span className='font-bold text-4xl'>{Price}</span>
            <span className='text-xl font-bold text-grey-500'>/mo</span>  
            </p>
           
           
           <div>
           <h3 className='font-bold  text-lg text-left pt-4'>Benefits :</h3>
            {
                 Benefits.map(perBenefits => <Benefit allBenefits= {perBenefits}
                 
                 ></Benefit>) 
               }
                <button className='bg-green-600 flex w-full justify-center items-center border-2 py-1 px-3 font-semibold mt-4 rounded-md '>buy Now<ArrowRightIcon className='w-5 h-5 ml-2'></ArrowRightIcon></button>
           </div>
              
            
           </div>
    );
};

export default PricingOption;