import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
        <div className='w-[80%] m-auto mt-[100px]'>
            <h1 className='text-4xl font-bold my-3 w-[80%] md:text-6xl'>Find your next perfect place with ease</h1>
            <p className='my-7 w-[90%] lg:w-[50%] md:w-[70%]'>Sahand Estate will help you find your home fast, easy and comfortable.
            Our expert support are always available.</p>
            <Link to={'/place'}><button className='border-transparent border-2 bg-green-700 text-white p-2 rounded-xl hover:bg-transparent hover:text-green-700 hover:border-green-700'>Find place</button></Link>

        </div>
        <div className='w-[100%] h-[70vh] border my-[50px]'>
            <img className='h-full w-full' src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
        </div>
        </>
    );
}

export default Home;