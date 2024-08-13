
import logo from "../../images/logo-new.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../../config/UserContext";
import { useContext } from "react";
import { clearCart } from "../utils/slices/cartSlice";

const Header = () => {
    const location = useLocation(); // to get passed form values (state obj)
    const navigate = useNavigate(); // for redirecting url
    const loginFormData = location.state || null;
    //custom hook
    const onlineStatus = useOnlineStatus();
    let { defaultUsername, setDefaultUsername } = useContext(UserContext);
    const dispatch = useDispatch();

    //subscribing to the store using a selector
    const cartItems = useSelector(store => store.cartReducer.items);

    const handleLoginLogout = () => {
        if (loginFormData) {
            navigate("/")
        } else {
            navigate("/login");
            setDefaultUsername("User");
            dispatch(clearCart());
        }
    }
    // for the below emojis press window and period (.)
    const header = 
        <div className="bg-lime-200 flex justify-between shadow-lg mb-10">
            <img id="logo" src={logo} alt="logo" className="h-20"/>
            <nav className="flex">
                <ul className="flex items-center">   
                    <li className="p-2">Internet Connection: {onlineStatus ? "🟢" : "🔴"}</li>  
                    <li className="p-2"><Link to="/">Home</Link></li>
                    <li className="p-2"><Link to="/about">About Us</Link></li>
                    <li className="p-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                    <li className="p-2"><button className="bg-transparent rounded border border-lime-500 hover:bg-lime-300 hover:text-white px-4 py-2" onClick={handleLoginLogout}>{defaultUsername !== "User" ? "Logout" : "Login"}</button></li>
                    {defaultUsername !== "User" ? <li className="p-2">Welcome {defaultUsername}!</li> : ""}
                </ul>
            </nav>
        </div>;

    return header;
}

export default Header;