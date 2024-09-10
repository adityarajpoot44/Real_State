import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';

function SignIn(){
  const [loading,setloading]=useState(false);
  const navigate=useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    setloading(true)
    const email = event.target.email.value;
    const password = event.target.password.value;
    const formData={
      email,
      password
    }
    console.log(formData)
    try {
      const response = await fetch('http://localhost:3000/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
        mode:'cors'
      })
      const data= await response.json();
      //give a better view to user;
      console.log(data);
      if(data.flag){
        navigate('/');
      }
      setloading(false);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  } 
  return (
    <>
      <div className="max-w-lg p-3  mx-auto ">
        <h1 className="text-center text-3xl font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Email" id="email" className="border rounded-lg p-3" />
          <input type="text" placeholder="Password"  id="password" className="border rounded-lg p-3" />
          <input type="submit" value={loading ? "Loading..." : "Log In"} disabled={loading} className="bg-red-600 rounded-lg p-3 cursor-pointer text-white uppercase hover:bg-red-400"></input>
        </form>
        <div className="mt-4">
          <span>Dont Have an account?</span>
          <Link to={'/sign-up'}>
          <span className="mx-2 text-blue-700 hover:text-blue-400">Sign Up</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
