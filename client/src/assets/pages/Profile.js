
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function Profile(){
    
    
    return(
        <>
        <div className='flex flex-col mt-10 place-items-center'>
            <h1 className='text-4xl font-bold'>Dashboard</h1>
            <div className='border rounded-full w-[150px] h-[150px] my-5'>
                    <img className="rounded-full" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt=''/>
            </div>
            <form className='flex flex-col gap-3 w-1/3 '>
                <input type='text' name='username' className='p-3 rounded-lg outline-none' placeholder='Username'></input>
                <input type='text' name='email' className='p-3 rounded-lg outline-none' placeholder='Email'></input>
                <input type='text' name='password' placeholder='New Password' className='p-3 rounded-lg outline-none'></input>
                <input type='text' name='password' placeholder='Retype Password' className='p-3 rounded-lg outline-none'></input>
                <button className='rounded-lg bg-green-500 text-white p-3 hover:bg-green-700'>UPDATE</button>
            </form>
            <Link to={"/create-list"} className='w-1/3'><button className='my-3 w-full rounded-lg bg-blue-500 text-white p-3 hover:bg-blue-700'>CREATE LISTING</button></Link>
            <div className='w-1/3 my-3 flex justify-between'>
                <span className='text-red-700 hover:text-white hover:bg-red-500 px-2 rounded-lg cursor-pointer'>Delete Account</span>
                <span className='text-red-700 hover:text-red-400 cursor-pointer'>Logout</span>
            </div>
            <p className='my-4 font-semibold cursor-pointer hover:text-blue-400 underline'>My Property</p>
        </div>
        </>
    );
}

export default Profile;