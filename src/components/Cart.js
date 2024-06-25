
import { clearCart } from "../utils/slices/cartSlice";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {

    const cartItems = useSelector(store => store.cartReducer.items);
    const dispatch = useDispatch();

    const clearCartItems = () => {
        dispatch(clearCart());
    }

    if (cartItems.length === 0) return <h1>No items to show. Please add items.</h1>

    return <div className="m-10 p-10 h-auto text-center">
            <div className="text-xl font-bold m-2 p-2">Cart Items</div>
            <button className="bg-red-400 rounded py-2 px-4 m-auto shadow-lg hover:bg-red-600 hover:text-white" onClick={clearCartItems}>Clear Cart</button>
            <div className="border border-lime-500 my-5 mx-auto p-5 w-6/12 bg-lime-50 shadow-lg">
                {
                    cartItems.map(item => <ItemList info={item} key={item.id}/>)
                }
            </div>
        </div>
}

export default Cart;