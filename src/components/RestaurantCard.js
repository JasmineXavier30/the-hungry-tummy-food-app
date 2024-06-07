import { SWIGGY_MEDIA_URL } from "../../config/constants";

const RestaurantCard = ({ res }) => {
    const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla, areaName } = res?.info;
    return (
        <div className="res-card">
            <img className="res-image" src={`${SWIGGY_MEDIA_URL}${cloudinaryImageId}`} alt="restaurant image" />
            <div className="res-div">
                <h3>{name /*test*/}</h3>
                <h4>{avgRating}</h4>
                <h4>{sla?.slaString}</h4>
                <p>{costForTwo}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;