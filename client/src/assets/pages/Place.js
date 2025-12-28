import Filter from '../component/smallCom/Filter.js'
import { useState, useEffect } from 'react';
import ListCard from '../component/smallCom/ListCard.js';
import axios from 'axios';

function Place() {
    const [propertiesList, setPropertiesList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/data/propertiesAllList`)
            .then((response) => {
                setPropertiesList(response.data);
                console.log("all properties", response.data)
            }).catch((err) => {
                console.log("eroor in the all the list", err)
            })
    }, [])

    return (
        <>
            <div className="flex flex-row gap-2 p-4 mt-10">
                <div className='w-1/3'>
                    <Filter />
                </div>
                <div className=' border-l-2 rounded-lg w-2/3'>
                    <h1 className='text-center font-semibold text-3xl mb-5'>Property List</h1>
                    <div className='flex justify-end'>
                        <div className="">
                            <select className="p-2 pr-10 rounded-md mr-4 mb-5" >
                                <option value="Latest">Latest</option>
                                <option value="Popular">Oldest</option>
                                <option value="Popular">Price Low to High</option>
                                <option value="Popular">Price High to Low</option>
                            </select>
                        </div>

                    </div>
                    <div className='flex flex-wrap justify-between gap-2'>
                        {propertiesList.length > 0 ? propertiesList.map((property, index) => {
                            return <ListCard 
                            key={index} 
                            name={property.name} 
                            description={property.description} 
                            address={property.address} 
                            price={property.price} 
                            beds={property.beds} 
                            baths={property.baths} />
                        }) :<div className="text-center text-gray-500 py-6 w-full">
                                    No properties to display.
                                </div>

                    }
                    </div>
                </div>
            </div>
        </>

    )
}
export default Place;