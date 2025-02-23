import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { signOutUserFailure, singOutUserStart, singOutUserSuccess } from "../../redux/user/userSlice";

export const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Logout = () => {
        dispatch(singOutUserStart());
        axios.get('http://localhost:3000/api/auth/signout').then((data)=>{
            if(data.success===false){
                dispatch(signOutUserFailure(data.message));
            }
            navigate('/sign-in');
            localStorage.clear();
            dispatch(singOutUserSuccess());
        }).catch((err)=>dispatch(signOutUserFailure(err)))
    }
    return Logout;
}
