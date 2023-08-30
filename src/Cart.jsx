import React,{useEffect, useState} from 'react';
import {useLocation } from 'react-router-dom';

const Cart = () => {

  // const [arr,setArr]=useState([]);


  const [change,setChange]=useState([]);

  const location=useLocation()


  // console.log(location.state.capture)   // worked......


  useEffect(()=>{
    setChange(location.state.capture)
  },[location.state.capture])



  // console.log(change)

  // console.log(typeof location.state.capture);

  // const capturing=structuredClone(location.state.capture)
  // console.log(capturing,"ajithganapathy")

// const Cart=(lists)=>{

// }


// function handlehome(){
//   navigate('/HOME')
// }

  // function handle_remove(){

  //   setArr([...location.state.capture,arr]);
  //   console.log(arr);
  // }

  function handle_remove(id){
    const remove=change.filter((item)=>item.id!==id);
    setChange(remove);
  }

  return (
    <div className="carting">

      {/* <button  className='cart-page-home'  onClick={()=>handlehome()}>Back to HOME</button> */}

      {
        // location.state.capture.map((items)=>{

          change.map((items)=>{
          return(
            <div className='cart-content'>

            <div>
            <p className='product-title'>{items.title}</p><br/>
            <img src={items.image} className='images' alt='img' width='230px' height='200px' border='2px solid black' margin-left='20px'/>
            </div>

            <div className='listing-contents'>
              
            <p className="price">${items.price}</p>
            <p className='category'>Category:{items.category}</p><br/>
            <p className='cart-item'>items id:{items.id}</p>
            <p>{items.description}</p><br/>

            </div>

            <div className='cart-changes-add-sub-del'> 

              <p>INCREMENT:{3}</p>
              <button  className='cart-changes-button' onClick={()=>handle_remove(items.id)}>REMOVE</button>
              <p>DECREMENT:{5}</p>

            </div>

            </div>
          )
        })
      }
    

    </div>
  )
}

export default Cart
