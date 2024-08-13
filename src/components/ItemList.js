import { useDispatch } from "react-redux";
import { SWIGGY_MEDIA_URL } from "../../config/constants";
import { addItem } from "../utils/slices/cartSlice";

const ItemList = ({ info }) => {
    const dispatch = useDispatch();

    const addItemToCart = (info) => {
        dispatch(addItem(info))
    };

    return (
        <div data-testid="foodItems" className="text-left p-2 m-2 flex justify-between border-b-2 border-lime-100">
            <div className="w-9/12 py-2">
                <div className="font-bold">{info.name}</div>
                <div className="">₹ {info.price / 100 || info.defaultPrice / 100}</div>
                <div className="text-xs">{info.description}</div>
            </div>
            <div className="w-3/12 p-4 relative">
                <img src={`${SWIGGY_MEDIA_URL}${info.imageId}`} alt="Item Image" className="rounded w-full h-32" />
                <div className="absolute bottom-1 mx-6">
                    <button className="bg-lime-50 rounded py-2 px-4 m-auto shadow-lg hover:bg-lime-300 hover:text-white" onClick={() => addItemToCart(info)}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ItemList;