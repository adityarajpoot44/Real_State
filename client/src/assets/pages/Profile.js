
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useLogout} from '../component/custom_hook';

function Profile() {

    const { currentUser } = useSelector((state) => state.user);
    const Logout = useLogout();
    
    const password = useRef();
    let repass;

    function handleUpdate(e) {
        e.preventDefault();
        if (repass !== password.current.value) {
            console.log("false");   
        }
    }

    async function handleDeleteAccount(){
        axios.DELETE('',{currentUser})
    }

    return (
        <>
            <div className='flex flex-col mt-10 place-items-center p-4'>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <div className='border rounded-full w-[150px] h-[150px] my-5'>
                    <img className="rounded-full" src={currentUser ? currentUser.avatar : null } alt='' />
                </div>
                <form className='flex flex-col gap-3 w-full md:w-1/3  '>
                    <input type='text' name='username' className='p-3 rounded-lg outline-none' value={currentUser ? currentUser.username : null} placeholder='Username'></input>
                    <input type='text' name='email' className='p-3 rounded-lg outline-none' value={currentUser ? currentUser.email : null} placeholder='Email'></input>
                    <input type='text' placeholder='New Password' ref={password} className='p-3 rounded-lg outline-none'></input>
                    <input type='text' name='password' placeholder='Retype Password' className='p-3 rounded-lg outline-none' onChange={(e) => (repass = e.target.value)}></input>
                    <button className='rounded-lg bg-green-500 text-white p-3 hover:bg-green-700' onClick={handleUpdate}>UPDATE</button>
                </form>
                <Link to={"/create-list"} className='w-full  md:w-1/3'><button className='my-3 w-full rounded-lg bg-blue-500 text-white p-3 hover:bg-blue-700'>CREATE LISTING</button></Link>
                <div className='w-full md:w-1/3 my-3 flex justify-between'>
                    <span className='text-red-700 hover:text-white hover:bg-red-500 px-2 rounded-lg cursor-pointer' onClick={handleDeleteAccount}>Delete Account</span>
                    <span className='text-red-700 hover:text-red-400 cursor-pointer' onClick={Logout}>Logout</span>
                </div>
                <p className='my-4 font-semibold cursor-pointer hover:text-blue-400 underline'>My Property</p>
            </div>
        </>
    );
}

export default Profile;
