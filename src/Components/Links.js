import React from 'react';

const Links = ({rountsInfo}) => {
    const {name,link} = rountsInfo;
    return (
       
                     <li className='mr-20'><a href={link}>{name}</a></li>
          
       
    );
};

export default Links;