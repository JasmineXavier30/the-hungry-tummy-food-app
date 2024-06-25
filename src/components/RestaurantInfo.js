
import { useState } from "react";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./hooks/useRestaurantMenu";

const RestaurantInfo = () => {

    const [resInfo, resMenu] = useRestaurantMenu();
    const [showIndex, setShowIndex] = useState(false);

    const toggleItemListDisplay = (index) => {
        if (showIndex == index) setShowIndex(null);
        else setShowIndex(index)
    }

    if (resInfo === null || resMenu === null) return <h2>Loading...</h2>;

    if (resInfo === undefined || resMenu === undefined)
        return <>
            <h2>Sorry for the Inconvenience!</h2>
            <h3>Cannot Show Restaurant at the moment.</h3>
        </>
    const { name, avgRating, locality, areaName, city, cuisines, costForTwoMessage } = resInfo;
    //console.log("resmenu::", resMenu)
    return (
        <div className="m-10 p-10 h-auto text-center">
            <div className="mb-5">
                <h1 className="font-bold text-lg pb-1">{name}</h1>
                <h2 className="font-bold">Rating: {avgRating} - {costForTwoMessage}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{locality} - {areaName} - {city}</h3>
            </div>
            {resMenu.map((x, index) => <RestaurantMenuCategory key={x.card.card.title} category={x.card.card} showItems={showIndex == index ? true : false} toggleItemListDisplay={() => toggleItemListDisplay(index)} />)} 
        </div>
    )
}

export default RestaurantInfo;