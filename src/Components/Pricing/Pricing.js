import React from 'react';
import PricingOption from './PricingOption';

const Pricing = () => {
    const PricingTable = [
        {id: 1, name:"Basics",Price: '$'+127 ,Benefits:['Safer shopping','Easy payments','Convenient shopping','A single hub for data management','An official storefront for your business']},
        {id: 2, name:"Regular",Price: '$'+741, Benefits:['Shopping analytics ', ' performance management' ,'The Special-Offer trick' ,'Product/Service reviews' ,'Selection filters']},
        {id: 4, name:"Classical",Price: '$'+999, Benefits:['Integrations with third-party software' ,'Analytics & Reporting. ' ,'Product/Service reviews' ,'Analytics & Reporting.' ,'Checkout pack']}
    ]
    return (
        <div className='text-center bg-indigo-400 p-4 mt-8'>
            <h2 className='text-4xl'>Best Deals Of the Year</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum id quibusdam a molestiae odit sed quo veritatis! Officia dolore incidunt eos? Aliquam blanditiis libero cupiditate omnis quidem inventore ipsa totam neque! Iste eius quia ut officiis? Cum, quod quo?</p>

        <div className='grid md:grid-cols-2 /* xs:grid-cols-1 */ lg:grid-cols-3'>
            {
                PricingTable.map(priceInfo=> <PricingOption
                 pricingtalbles = {priceInfo}
                ></PricingOption>)
            }
        </div>
        </div>
    );
};

export default Pricing;