// import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


function Mylist() {
    const [propertyData, setPropertyData] = useState();
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        axios.post('http://localhost:3000/api/user/my-property', { userId: currentUser._id }).then((response) => {
            setPropertyData(response.data);
        })

    },[currentUser])
    console.log(propertyData);

    return (
        <>
            <div className="flex flex-col mt-10 place-items-center p-4">
                <h1 className='text-4xl font-bold'>My List</h1>

                <div className="border border-red-700 mt-5 p-4 flex flex-col w-[90%] md:w-[80%] m-auto">

                    {propertyData.map((property) => (
                        <>
                            <div key={property._id} className="border border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-stretch gap-4 shadow-md">
                                {/* Image Section */}
                                <div className="w-[100%] sm:w-[50%] lg:w-[30%] rounded-xl overflow-hidden flex-shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Property"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>

                                {/* Property Details */}
                                <div className="flex-1 flex flex-col gap-2">
                                    {/* <div className="relative">
                                <div className="mt-2 flex gap-4 text-red-500 text-xl absolute top-[-24px] right-4">
                                    <button className="text-white rounded-lg">
                                        🗑️
                                    </button>
                                </div>

                            </div> */}
                                    <h2 className="font-semibold text-2xl text-green-700">Modern Family House</h2>
                                    <p className="text-gray-700">A spacious modern house located in the heart of the city with excellent amenities and well-furnished rooms.</p>
                                    <p className="text-gray-600"><span className="font-semibold">Address:</span> 123 Park Avenue, New York</p>
                                    <p className="text-gray-600"><span className="font-semibold">Beds:</span> 3 | <span className="font-semibold">Baths:</span> 2</p>
                                    <p className="text-gray-600"><span className="font-semibold">Condition:</span> Furnished | <span className="font-semibold">Type:</span> Rent</p>
                                    <p className="text-xl font-bold text-blue-700 mt-auto">$2500 / Month</p>

                                    {/* Action Buttons */}
                                    {/* <div className="mt-2 flex gap-4">
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg">Edit</button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Delete</button>
                            </div> */}
                                </div>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Mylist;