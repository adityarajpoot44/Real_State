import axios from "axios";
import { useState } from "react";

function Filter() {

    const [filterData,setfilterData] =useState({
        search:'',
        type:" ", 
        condition:'',
    })

    const handleData=(e)=>{
        setfilterData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(filterData);
        // axios.post('/url',filterData);
    }
    return (
        <>
            <div className="w-full p-3">
                <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
                    <div className="">
                        <label for="search" className="mr-2">Search Term:</label>
                        <input name="search" type="text" placeholder="Search here" className="p-1 pl-2 border-none outline-none rounded-md font-thin text-green-500" onChange={handleData}></input>
                    </div>

                    <div className="">

                        <label for="Type" className="">Type:</label>
                        <input name="type" type="radio" value="Rent" className="ml-2 mr-1" onChange={handleData}/><span>Rent</span>
                        <input name="type" type="radio" value="Sell" className="ml-2 mr-1" onChange={handleData} /><span>Sell</span>
                        <input name="type" type="radio" value="Both" className="ml-2 mr-1" onChange={handleData} /><span>Rent & Sell</span>

                    </div>
                    <div className="">
                        <label>Amenities:</label>
                        <input name="condition" type="radio" value="Furnished" className="ml-2 mr-1" onChange={handleData}/><span>Furnished</span>
                        <input name="condition" type="radio" value="Semi-Furnished" className="ml-2 mr-1" onChange={handleData}/><span>Semi-Furnished</span>
                        <br></br> 
                        <input name="condition" type="radio" value="Unfurnished" className="ml-2 mr-1" onChange={handleData}/><span>Unfurnished</span>

                    </div>

                    <input type="submit" value="Search" className='border-transparent border-2 bg-green-700 text-white p-2 rounded-xl hover:bg-transparent cursor-pointer hover:text-green-700 hover:border-green-700'></input>
                </form>
            </div>
        </>
    )
}
export default Filter;
