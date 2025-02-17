import Filter from '../component/smallCom/Filter.js'
function Place(){
    return (
        <>
        <div className="flex flex-row gap-2 p-4 mt-10">
            <div className='w-1/3'>
                <Filter/>
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
            </div>
        </div>
        </>

    )
}
export default Place;