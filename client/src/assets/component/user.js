import { useState } from "react"
import { Link } from "react-router-dom";

function User(){
    const [detail,setdetail]=useState(false);
    return (
        <>
        <div>
            <div className=" w-[25px]" onMouseEnter={()=>setdetail(true)} onClick={()=>setdetail(false)}>
                <img className="rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt=" "></img>
            </div>
            {detail && <div className="absolute bg-white rounded p-3 text-sm font-thin mt-1 ml-3 ">
                <Link to="/profile"><li className="hov_nav hover:text-orange-500">Profile</li></Link>
                <li className="hov_nav  hover:text-orange-500">Our List</li>
                <li className="hov_nav  hover:text-orange-500">Logout</li>
            </div>}
        </div>
        </>
    )
}
export default User