import { SWIGGY_MEDIA_URL } from "../../config/constants";

const RestaurantCard = ({ res }) => {
    const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla, areaName } = res?.info;
    return (
        <div data-testid="resCard" className="w-[250px] h-[30rem] border-lime-500 shadow-lg bg-lime-200 hover:bg-lime-300 mt-10 m-4 p-4 rounded-lg">
            <img className="w-52 h-52 rounded-lg" src={`${SWIGGY_MEDIA_URL}${cloudinaryImageId}`} alt="restaurant image" />
            <div className="res-div">
                <h3 className="font-bold py-2 text-lg">{name}</h3>
                <span className="text-sm font-semibold py-1">{avgRating}</span>
                <span className="text-sm font-semibold py-1 ml-2 text-right">{sla?.slaString}</span>
                <p className="py-1 font-semibold text-orange-700">{costForTwo}</p>
                <p className="py-1 italic">{cuisines.join(", ")}</p>
                <p className="py-1 text-sm">{areaName}</p>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-lime-900 mt-5 text-white p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </>
        )
    }
}

export default RestaurantCard;