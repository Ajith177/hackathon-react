import React,{useState,useEffect} from 'react';
import './index.css';
import{useNavigate}from 'react-router-dom'



const Home = () => {
const[state,setState]=useState([]);
const [res,setRes]=useState([]);
const[pushing,setPushing]=useState([]);

const navigate=useNavigate()

useEffect(()=>{
  fetch('https://fakestoreapi.com/products/')
.then(response=>response.json())
.then(response=>setState(response));
},[])


function checkingProducts(e){
setPushing(e.target.value);
}

useEffect(()=>{
  const filtering=state.filter((values)=>values.title.toLowerCase().includes(pushing));
  setState(filtering)

},[pushing]);


// useEffect(()=>{
//   const filtering=state.filter((words)=>words.id!==id.LowerCase().includes());
// })

function handledelete(id){
  const del=state.filter((value)=>value.id !== id);
  setState(del);
}

function handleitem(item){
  setRes([...res,item])

  console.log(item);   // worked.....

  // console.log(setRes);  // nor worked
  // console.log(res);      // not worked...
  (handleitem_cart(item))   // works....
  
}

function handleitem_cart()
{
  console.log(res);

  // setPushing([...res,ajith])
  // navigate('/Cart',{state:{capture:res}});
}

  return (
    <>
      <div  className='home-box'>
      <div>
      <input type="text" className="texting"  value={pushing} onChange={checkingProducts} id="text-box" placeholder="Enter the Product" autoFocus autoComplete='off'/>
      <input type="submit"  value="List-products"  className='submit_btn' id="submit" autoComplete='off'/>
      <h2 onClick={()=> navigate('/Cart',{state:{capture:res}})}>Cart</h2>
        </div>
     
      </div>
    
        {
        state.map((items)=>{
          return(
          <div className='homing' >
            <div>
            <p className='product-title'>{items.title}</p><br/>
            <img src={items.image} className='images' alt='img' width='230px' height='200px' border='2px solid black' margin-left='20px'/>
            </div>
 
          <div className='listing-contents'>
            <p className="price">${items.price}</p>
            <p className='category'>Category:{items.category}</p><br/>
            <p>{items.description}</p>
            <p>{items.id}</p>
             <button className="delete" onClick={()=>handledelete(items.id)}>DELETE</button>
             <button className='cart-button' onClick={()=>handleitem(items)}>Add to Cart</button>
          </div>

          {/* <Cart lists={res}/> */}
          
      </div>
          )
        })
      }

    </>
     
  )
}

export default Home;
