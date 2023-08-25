import React,{useState} from 'react';
import './index.css';

const Home = () => {
const[state,setState]=useState([]);


fetch('https://fakestoreapi.com/products/').then(response=>response.json()).then(res=>setState(res));

console.log(state);

  return (
      <div  className='home-box'>
      <input type="text" className="texting" placeholder="Enter the Product" autoFocus/>

    
        {
        state.map((items)=>{
          return(
          <div className='homing' >

            <img src={items.image} class='images' alt='img' width='230px' height='200px' border='2px solid black' margin-left='20px'/>
            <p>{items.price}</p>
            </div>
          )
        })
      }
      </div>
     
  )
}

export default Home;
