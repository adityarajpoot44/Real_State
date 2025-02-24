import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInFailure, signInSuccess } from "../../redux/user/userSlice";


function SignIn() {
  const { loading } = useSelector((state) => state.user);
  const [detail, setdetail] = useState(false);
  const [errMessage, setErrMessage] = useState()

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function checkEmailFormate(event) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(event.target.value)) setErrMessage("email is not correct")
    else setErrMessage(' ')
  }

  async function handleSubmit(event) {
    event.preventDefault();

    dispatch(signInStart());

    const email = event.target.email.value;
    const password = event.target.password.value;
    const formData = {
      email,
      password
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors'
      })
      const data = await response.json();
      dispatch(signInSuccess(data.validuser));

      if (data.success) {
        navigate('/profile');
      }

      setErrMessage(data.message)

    } catch (error) {
      console.error('Fetch error:', error);
      dispatch(signInFailure(error.message));

    }
  }
  return (
    <>
      <div className="max-w-lg p-3  mx-auto">
        <h1 className="text-center text-3xl font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
          <span onMouseEnter={() => setdetail(true)} onMouseLeave={() => setdetail(false)} className="absolute right-3 top-3 text-gray-300 cursor-pointer hover:text-black hover:border-black border rounded-full px-[10px] ">i</span>
          {detail && <div className="absolute right-[-220px] bg-black text-white p-2 border rounded-xl">
            <p>username: admin@gmail.com<br />password: admin@123</p>
          </div>
          }
          <input type="text" placeholder="Email" id="email" className="border rounded-lg p-3" defaultValue="admin@gmail.com" onBlur={checkEmailFormate} required />
          <input type="text" placeholder="Password" id="password" className="border rounded-lg p-3" value={"admin@123"} required />
          <input type="submit" value={loading ? "Loading..." : "Log In"} disabled={loading} className="bg-red-600 rounded-lg p-3 cursor-pointer text-white uppercase hover:bg-red-400"></input>
        </form>
        <div className="mt-4">
          <span>Dont Have an account?</span>
          <Link to={'/sign-up'}>
            <span className="mx-2 text-blue-700 hover:text-blue-400">Sign Up</span>
          </Link>
        </div>
        <div className="text-red-500 text-center pt-4">
          <p>{errMessage}</p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
