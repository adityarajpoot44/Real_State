
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../component/custom_hook';
import axios from 'axios';
import bcryptjs from "bcryptjs";
import { deleteUserFailed, deleteUserStart, deleteUserSuccess, updateUserDetailsFailure, updateUserDetailsSuccess } from '../../redux/user/userSlice';

function Profile() {

    const { currentUser } = useSelector((state) => state.user);
    const [propertiesList, setPropertiesList] = useState([]);
    const Logout = useLogout();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const password = useRef();
    let repass = '';

    useEffect(() => {
        axios.get(`http://localhost:3000/api/data/propertiesList/${currentUser._id}`)
            .then((response) => {
                console.log("User properties:", response.data);
                setPropertiesList([...response.data]);
                console.log(currentUser);

            })
            .catch((error) => {
                console.error("Error fetching user properties: ", error);
            });
    },[]);

    function handleUpdate(e) {
        e.preventDefault();
        if (password.current.value !== '') {
            if (!(repass === password.current.value)) {
                return alert('incorrect password');
            }
        }

        axios.put(`http://localhost:3000/api/auth/update/${currentUser._id}`, { withCredentials: true }, {
            formData: {
                [e.target.username]: e.target.value,
                [e.target.email]: e.target.value,
                password: bcryptjs.hashSync(password.current.value, 10),
            }
        }).then((data) => {
            console.log("user update return value data ", data)
            dispatch(updateUserDetailsSuccess(data));
        }).catch((err) => {
            console.log("update field error =>", err)
            dispatch(updateUserDetailsFailure(err));
        })
    }

    async function handleDeleteAccount() {

        if (!window.confirm("Are you sure you want to delete your account?")) return;

        dispatch(deleteUserStart());
        axios.delete(`http://localhost:3000/api/auth/delete/${currentUser._id}`, { withCredentials: true }).then((resp) => {
            if (resp.data.success === false) {
                dispatch(deleteUserFailed(resp));
                return;
            }
            alert("User Account Deleted Successfully");
            dispatch(deleteUserSuccess());
            navigate('/sign-in');
        }).catch((err) => {
            dispatch(deleteUserFailed(err))
        })
    }


    // This function can be implemented to fetch and display user's properties



    return (
        <>
            <div className='flex flex-col mt-10 place-items-center p-4'>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <div className='border rounded-full w-[150px] h-[150px] my-5'>
                    <img className="rounded-full" src={currentUser ? currentUser.avatar : null} alt='' />
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
                <div className='w-full md:w-1/3 border p-4 rounded-lg'>
                    {/* Property component can be placed here */}
                    {propertiesList.length > 0 ?
                        propertiesList.map((property, index) => {
                            return (<div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border p-5 mb-4"
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-lg font-bold text-gray-800">
                                        {property.name}
                                    </h2>
                                    <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold">
                                        {property.type}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-3">
                                    {property.description}
                                </p>

                                {/* Address */}
                                <p className="text-gray-500 text-sm mb-4">
                                    📍 {property.address}
                                </p>

                                {/* Property Details */}
                                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
                                    <p><span className="font-semibold">Condition:</span> {property.condition}</p>
                                    <p><span className="font-semibold">Price:</span> ₹{property.price}</p>
                                    <p><span className="font-semibold">Beds:</span> {property.beds}</p>
                                    <p><span className="font-semibold">Baths:</span> {property.baths}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                                        View Details
                                    </button>
                                    <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                                        Contact
                                    </button>
                                </div>
                            </div>

                            )

                        })
                        : <div>No properties to display.</div>}


                </div>
            </div>
        </>
    );
}

export default Profile;
