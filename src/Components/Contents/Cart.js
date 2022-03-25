import React from 'react';
import '../Header/Header.css'
import {GiPurpleTentacle} from 'react-icons/gi'
const Cart = (props) => {
    const {clickAddToCart, gunsInfo} = props;
    const {name,img,bullet,capacity,action,price,category} = gunsInfo;
    
    return (
       

       
       

<div className="card text-center cardStyle" /* style={{width: '18rem'}} */>

  <img src={img} className="card-img-top" alt='' width={250} height={200}/>

  <div className="card-body ">
    <h5 className="card-title">{name}</h5>
    <h5 className='cart-title'>{price}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{capacity}</h6>
    <p className="card-text">{category}</p>
    <p className="card-text">{action}</p>
    <p className="card-text">{bullet}</p>
    <button className='btn btn-secondary btn' onClick={()=> clickAddToCart(gunsInfo)}><p>
        <GiPurpleTentacle size={20} color='black'/> Click Here</p></button>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
      <button onClick={props.conter}>Counter Cart</button>
    </div>
  </div>



{/* 
            <div className="guninfo">
            <img src={img} alt="" /> 
            <h3>{name}</h3>
            <p>{bullet}</p>
            <p>{capacity}</p>
            <p>{action}</p>
            <p>{price}</p>

            </div> */}
 </div>
         
           
        
    );
};

export default Cart;