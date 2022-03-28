import React, { useState } from 'react';
import Links from './Links';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const routes = [
        {id:1,name:'Home',link:'./Home'},
        {id:2,name:'Shop',link:'./Shop'},
        {id:3,name:'Deals',link:'./Deals'},
        {id:7,name:'Coupons',link:'./Coupons'},
        {id:4,name:'Contact',link:'./Contact'},
    ]
    const [isOpen, SetisOpen] = useState(false)

    return (
        
            <nav className='bg-indigo-500'>
                <div className='w-7 h-7 md:hidden' onClick={()=>SetisOpen(!isOpen)}>
                 {isOpen ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}   
                </div>
                <ul className={`md:flex justify-center bg-indigo-600 w-full md:static absolute duration-500 ease-in-out ${isOpen ? 'top-6 ' : 'top-[-120px]'}`}>
                    {
                        routes.map(perRountes => <Links
                        
                            rountsInfo = {perRountes}
                        
                        ></Links>)
                    }
                   
                </ul>
            </nav>
    );
};

export default Navbar;