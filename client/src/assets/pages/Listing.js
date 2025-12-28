import axios from "axios";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

function Listing() {
    const { currentUser } = useSelector((state)=> state.user)
    const [loading, setloading] = useState(false)
    const [imageData, setimageData] = useState([]);
    const fileInputRef = useRef(null);
    const [formData, setformData] = useState({
        userId:currentUser._id,
        name: '',
        description: '',
        address: '',
        type: '',
        condition: '',
        beds: 1,
        baths: 1,
        price: 0,
    })
    const handleImagedata = (e) => {
        setimageData(Array.from(e.target.files))
    }
    const deleteImage = (index) => {
        setimageData(imageData.filter((_, i) => i !== index));
    }
    const handleChange = (e) => {
        setformData(prev => ({
            ...prev,
            [e.target.name]: e.target.value

        }))
    }

    function handelSubmit(event) {
        event.preventDefault();
        setloading(true)
        const formDataToSend = new FormData();

        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        imageData.forEach((image, index) => {
            formDataToSend.append("propImage", image);
        });

        axios.post("http://localhost:3000/api/user/property-detail", formDataToSend, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((response) => {
                console.log("Upload successful!", response);
                setloading(false)
                setformData({
                    name: '',
                    description: '',
                    address: '',
                    type: '',
                    condition: '',
                    beds: 1,
                    baths: 1,
                    price: 0,
                });
                setimageData([]);
                if (fileInputRef.current) {
                    fileInputRef.current.value = null;
                }
            })
            .catch((error) => {
                console.error("Upload error:", error);
                console.log("Error response:", error.response?.data);
            });
       
    }

    return (
        <div className="w-full md:w-[80%] m-auto my-5">
            <h1 className="font-bold text-center text-4xl">Create Listing</h1>
            <form onSubmit={handelSubmit}>
                <div className="flex flex-col md:flex-row flex-wrap my-8">
                    <div className="w-full md:w-1/2 flex flex-col  gap-3 p-4">
                        <input type="text" name="name" placeholder="Name" className="p-3 rounded-lg outline-none" value={formData.name} onChange={handleChange} required></input>
                        <textarea placeholder="Description" name="description" className="p-3 rounded-lg outline-none" value={formData.description} onChange={handleChange} required></textarea>
                        <input type="text" name="address" placeholder="Address" className="p-3 rounded-lg outline-none" value={formData.address} onChange={handleChange} required></input>
                        <div className="w-full flex flex-col gap-3">
                            <div className="flex flex-row gap-3">
                                <div>
                                    <input type="radio" value="Rent" name="type" checked={formData.type === "Rent"} onChange={handleChange} required></input>
                                    <label className="mx-2">Rent</label>
                                </div>
                                <div>
                                    <input type="radio" value="sell" name="type" checked={formData.type === "sell"} onChange={handleChange} required></input>
                                    <label className="mx-2">Sell</label>
                                </div>
                            </div>

                            <div className="flex flex-row gap-3">
                                <div>
                                    <input
                                        type="radio"
                                        value="Furnished"
                                        name="condition"
                                        onChange={handleChange}
                                        checked={formData.condition === "Furnished"}
                                        required
                                    />
                                    <label className="mx-2">Furnished</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value="semi-Furnished"
                                        name="condition"
                                        onChange={handleChange}
                                        checked={formData.condition === "semi-Furnished"}
                                        required
                                    />
                                    <label className="mx-2">Semi-Furnished</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value="unfurnished"
                                        name="condition"
                                        onChange={handleChange}
                                        checked={formData.condition === "unfurnished"}
                                        required
                                    />
                                    <label className="mx-2">Unfurnished</label>
                                </div>
                            </div>

                        </div>
                        <div>

                        </div>
                        <div className="flex flex-row gap-3 place-items-center">
                            <label className="">Beds</label>
                            <input type="number" defaultValue={1} name="beds" value={formData.beds} className="w-[50px] p-2 rounded-lg outline-none" onChange={handleChange} required></input>
                            <label>Baths</label>
                            <input type="number" defaultValue={1} name="baths" value={formData.baths} className="w-[50px] p-2 rounded-lg outline-none" onChange={handleChange} required></input>

                        </div>
                        <div>
                            <input type="number" className="rounded-lg w-[100px] p-2 outline-none" value={formData.price} placeholder="0" name="price" onChange={handleChange} required></input>
                            <label className="ml-3">Price ($ / Month)</label>
                        </div>

                    </div>
                    <div className="w-full md:w-1/2 p-4 flex gap-4 flex-col">
                        <p>Image: First Image is the cover (max 6)</p>
                        <div>
                            <input type="file" name="image" className="border p-2 mr-2" multiple onChange={handleImagedata} ref={fileInputRef} required></input>
                        </div>
                        <div>
                            {imageData.map((image, index) => (
                                <div key={index} className="flex place-content-between p-2">
                                    <img src={URL.createObjectURL(image)} alt="" className="rounded-lg w-[200px] h-[100px]"></img>
                                    <span className="uppercase cursor-pointer text-red-600 hover:bg-red-500 rounded-lg px-2 hover:text-white h-max" onClick={() => deleteImage(index)}>Delete</span>
                                </div>
                            ))}
                        </div>

                        <button className="uppercase border w-full py-2 px-2 text-white bg-green-600 rounded-lg hover:border-green-500 hover:bg-transparent hover:text-green-500" >{loading ? "Loading..." : " Create Listing "}</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Listing