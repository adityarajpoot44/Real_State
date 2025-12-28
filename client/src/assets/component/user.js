import { useState } from "react"
import { Link } from "react-router-dom";
import { useLogout } from "./custom_hook";


function User() {
    const [Detail, setDetail] = useState(false);

    const LogOut = useLogout();

    return (
        <>
            <div
                className="relative inline-block border border-red-800"
                onMouseEnter={() => setDetail(true)}
                onMouseLeave={() => setDetail(false)}
            >
                {/* Avatar */}
                <div className="w-[35px] cursor-pointer">
                    <img
                        className="rounded-full"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="profile"
                    />
                </div>

                {/* Dropdown Menu */}
                {Detail && (
                    <ul className="absolute bg-white shadow-md rounded p-3 text-sm font-light  right-0 w-40 z-50">
                        <li className="hover:text-orange-500 py-1">
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li className="hover:text-orange-500 py-1">
                            <Link to="/our-list">Our List</Link>
                        </li>
                        <li
                            className="hover:text-orange-500 py-1 cursor-pointer"
                            onClick={LogOut}
                        >
                            Logout
                        </li>
                    </ul>
                )}
            </div>
        </>
    )
}
export default User;