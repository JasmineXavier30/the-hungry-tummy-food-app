import { SWIGGY_MEDIA_URL } from "../../config/constants";

const RestaurantCard = ({ res }) => {
    const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla, areaName } = res?.info;
    return (
        <div data-testid="resCard" className="w-[250px] border-lime-500 shadow-lg bg-lime-200 hover:bg-lime-300 m-4 p-4 rounded-lg">
            <img className="w-52 h-52 rounded-lg" src={`${SWIGGY_MEDIA_URL}${cloudinaryImageId}`} alt="restaurant image" />
            <div className="res-div">
                <h3 className="font-bold py-2 text-lg">{name /*test*/}</h3>
                <h4>{avgRating}</h4>
                <h4>{sla?.slaString}</h4>
                <p>{costForTwo}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-lime-900 text-white p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </>
        )
    }
}

export default RestaurantCard;