import location from '../../image/location.png'
function ListCard({name,description,address,price,beds,baths}) {
    return(
        <>
        <div className=" border w-[300px] flex flex-col gap-2 rounded-md">
            <div>
                <img className="w-full h-[200px] rounded-t-md" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" "></img>
            </div>
            <div className="mt-2 py-2 px-4">
                <h2 className="font-bold text-xl">{name}</h2>
                <p className='flex flex-row items-center gap-2 my-1'>
                    <span><img src={location} alt=" " width={"15px"}></img></span>
                    <span>{address}</span>
                </p>
                <p className='leading-tight text-gray-500 text-sm mb-2'>
                {description}
                </p>
                <p className='text-green-500 text-xl'>$<span>{price}</span> / month</p>
                <p className="flex flex-row gap-4 mt-2">
                    <span className='bg-green-500/20 rounded-md px-2 text-green-600 text-sm'>{beds} Bed</span>
                    <span className='bg-green-500/20 rounded-md px-2 text-green-600 text-sm'>{baths} Bath</span>
                </p>
            </div>

        </div>
        </>
    )
}

export default ListCard;