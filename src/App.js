import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Contents/Cart';
import Header from './Components/Header/Header';

function App() {
const [Guns, SetGuns] = useState([])

const [Carts, setCarts] = useState([])
console.log(Carts);

const handlecartToadd = (carWithParam)=> {
  const newGunCart = [...Carts , carWithParam];
  setCarts(newGunCart);

}

const [Count, SetCount] = useState(0)
const countCart = () => SetCount(Count + 1)

useEffect(()=>{
  fetch('guns/data.json')
  .then(res => res.json())
  .then(data => SetGuns(data))
},[])


  return (
    <div>
      <div className="headerstyle">
         <Header counterGun = {Count}
         />

         
      </div>
      
      <div style={{backgroundColor:'violet',display:'flex',justifyContent:'space-evenly',flexWrap:'nowrap'}}>
            {
              Carts.map(perCart => (

                <h4 style={{border:'3px solid grey',padding:'5px'}}>Name : {perCart.name}</h4>
              ))
            }
          </div>
       
     
      <div className='gunStyle cart-container'>
         {
        Guns.map(gun => 

           <Cart
             conter ={countCart}

            gunsInfo = {gun}

            key={gun.id}
          
            clickAddToCart = {handlecartToadd}
           ></Cart>
           
           )
      }
      </div>
     
     
    </div>
  );
}

export default App;
