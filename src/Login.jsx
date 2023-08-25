import React, { useState } from 'react'
import './index.css';

const Login = () => {
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
  const[list,setList]=useState([]);

  function handleChange(event) {
    console.log(event.target.value);
  }

  function handlemail(event){
    setEmail(event.target.value);
    console.log(email);
  }

  function handlepass(event){
    setPassword(event.target.value);
    console.log(password);
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    setList([...list,email,password])
    setEmail("");
    setPassword("");
  }
  console.log(setList);

  return (
    <div className='complete'>
        <label for="name" className='page'><u>LOGINPAGE</u></label><br/>
        <input type="email" className='email-box' id='emailbox' name='email' value={email} placeholder="example@gmail.com" onChange={handlemail}/><br/>
        <input type="password" className='password-box' id='password'name='password' value={password} placeholder="Password"  onChange={handlepass} autoComplete='off'/><br/>
        <input type="password" className='password-boxing' id='confirm-password' name='confirmPassword'  onChange={handleChange} placeholder='Confirm Password'/><br/>
        <label for="condition" className='condition-1'><u>Already a user</u></label><br/>
        <button className='login'onClick={handleSubmit}>LOGIN</button><br/>
        <label for="condition" className='condition-2'><u>New user</u></label><br/>
        <button className='Account'>CREATE ACCOUNT</button>
    </div>
  )
}

export default Login;
