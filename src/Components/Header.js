import React from 'react';


import Navbar from './Navbar';
import Pricing from './Pricing/Pricing';
const Header = () => {
   
    
    return (
        
        <div>
            <Navbar></Navbar>
              <h1 className='' style={{textAlign:'center',fontSize:'25px'}}>Hellow TailWind CSS</h1>
              <Pricing></Pricing>
        </div>
           
       
    );
};

export default Header;