import axios from "axios";
import { useEffect, useState } from "react";

function Listing() {

    const [formData, setformData] = useState({
        name: '',
        description: '',
        address: '',
        type: '',
        condition: '',
        beds: 1,
        baths: 1,
        price: 0,
    })
    const [imageData, setimageData] = useState([]);

    const handleImagedata = (e) => {
        setimageData(Array.from(e.target.files))
    }
    const deleteImage =(index)=>{
        setimageData(imageData.filter((_,i)=> i!==index));
    }
    const handleChange = (e) => {
        setformData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handelSubmit(event) {
        event.preventDefault();
        // axios.post('/property-detail',{formData,imageData})
    }

    return (
        <div className="w-full md:w-[80%] m-auto my-5">
            <h1 className="font-bold text-center text-4xl">Create Listing</h1>
            <form >
                <div className="flex flex-col md:flex-row flex-wrap my-8">
                    <div className="w-1/2 flex flex-col  gap-3 p-4">
                        <input type="text" name="name" placeholder="Name" className="p-3 rounded-lg outline-none" onChange={handleChange} required></input>
                        <textarea placeholder="Description" name="description" className="p-3 rounded-lg outline-none" onChange={handleChange} required></textarea>
                        <input type="text" name="address" placeholder="Address" className="p-3 rounded-lg outline-none" onChange={handleChange} required></input>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3">
                                <div>
                                    <input type="radio" value="Rent" name="type" onChange={handleChange} required></input>
                                    <label className="mx-2">Rent</label>
                                </div>
                                <div>
                                    <input type="radio" value="sell" name="type" onChange={handleChange} required></input>
                                    <label className="mx-2">Sell</label>
                                </div>
                            </div>

                            <div className="flex flex-row gap-3">
                                <div>
                                    <input type="radio" value="Furnished" name="condition" onChange={handleChange} required></input>
                                    <label className="mx-2">Furnished</label>
                                </div>
                                <div>
                                    <input type="radio" value="semi-Furnished" name="condition" onChange={handleChange} required></input>
                                    <label className="mx-2">Semi-Furnished</label>
                                </div>
                                <div>
                                    <input type="radio" value="unfurnished" name="condition" onChange={handleChange} required></input>
                                    <label className="mx-2">Unfurnished</label>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div className="flex flex-row gap-3 place-items-center">
                            <label className="">Beds</label>
                            <input type="number" defaultValue={1} name="beds" className="w-[50px] p-2 rounded-lg outline-none" onChange={handleChange} required></input>
                            <label>Baths</label>
                            <input type="number" defaultValue={1} name="baths" className="w-[50px] p-2 rounded-lg outline-none" onChange={handleChange} required></input>

                        </div>
                        <div>
                            <input type="number" className="rounded-lg w-[100px] p-2 outline-none" placeholder="0" name="price" onChange={handleChange} required></input>
                            <label className="ml-3">Price ($ / Month)</label>
                        </div>

                    </div>
                    <div className="w-1/2 p-4 flex gap-4 flex-col">
                        <p>Image: First Image is the cover (max 6)</p>
                        <div>
                            <input type="file" name="image" className="border p-2 mr-2" multiple onChange={handleImagedata}></input>
                            <button className="uppercase text-green-500 border p-2 border-green-500 cursor-pointer hover:bg-green-200">Upload</button>
                        </div>
                        <div>
                            {imageData.map((image, index) => (
                                <div key={index} className="flex place-content-between p-2">
                                    <img src={URL.createObjectURL(image)} alt="" className="rounded-lg w-[200px] h-[100px]"></img>
                                    <span className="uppercase cursor-pointer text-red-600 hover:bg-red-500 rounded-lg px-2 hover:text-white h-max" onClick={()=>deleteImage(index)}>Delete</span>
                                </div>
                            ))}
                        </div>

                        <button className="uppercase border w-full py-2 px-2 text-white bg-green-600 rounded-lg hover:border-green-500 hover:bg-transparent hover:text-green-500" onClick={handelSubmit} >Create Listing</button>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default Listing