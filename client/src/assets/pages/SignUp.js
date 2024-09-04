
import React from 'react';
import {Link} from 'react-router-dom';

function SignUp(){
    return(
        <>
        <div className="max-w-lg p-3  mx-auto ">
        <h1 className="text-center text-3xl font-semibold my-7">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Username" className="border rounded-lg p-3" />
          <input type="text" placeholder="Email" className="border rounded-lg p-3" />
          <input type="text" placeholder="Password" className="border rounded-lg p-3" />
          <input type="submit" value="Sign up" className="bg-red-600 rounded-lg p-3 cursor-pointer text-white uppercase hover:bg-red-400"></input>
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