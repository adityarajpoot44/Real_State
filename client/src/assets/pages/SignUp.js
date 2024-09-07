
import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    let formData = {
      username: username,
      email: email,
      password: password,
    };
  
    console.log('Form Data:', formData);
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors', // Explicitly set CORS mode (usually optional)
      });
      console.log(response.ok);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Response Data:', data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  


return (
  <>
    <div className="max-w-lg p-3  mx-auto ">
      <h1 className="text-center text-3xl font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Username" id='username' className="border rounded-lg p-3" />
        <input type="text" placeholder="Email" id="email" className="border rounded-lg p-3" />
        <input type="text" placeholder="Password" id="password" className="border rounded-lg p-3" />
        <button type="submit" value="Sign up" className="bg-red-600 rounded-lg p-3 cursor-pointer text-white uppercase hover:bg-red-400">Sign Up</button>
      </form>
      <div className="mt-4">
        <span>Have an account?</span>
        <Link to={'/sign-in'}>
          <span className="mx-2 text-blue-700 hover:text-blue-400">Sign In</span>
        </Link>
      </div>
    </div>
  </>
);
}

export default SignUp;