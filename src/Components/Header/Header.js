import React from 'react';
 import logo from './gun-logo.png'
 import {BsCartCheck} from 'react-icons/bs'
 import './Header.css'
const Header = (props) => {
    const {conter,counterGun,gunname} = props;
    console.log(conter);
    return (

        <nav>
            <div className="Menubar">
            <div className="logo">
                <img src={logo} alt=""  width={100} height={70}/>
            </div>

            <div className="Menu">
                <div className="icon">
                    <BsCartCheck/><sup style={{fontSize:'18px',fontWeight:'normal'}}>{counterGun}</sup>
                </div>
            </div>

            </div>

<h1>
    {gunname}
</h1>
        </nav>
    );
};

export default Header;