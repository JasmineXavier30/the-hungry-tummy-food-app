
const RestaurantCard = ({ res }) => {
    const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla, areaName } = res?.info;
    return (
        <div className="res-card">
            <img className="res-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="restaurant image" />
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