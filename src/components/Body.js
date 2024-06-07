import RestaurantContainer from "./RestaurantContainer";
import { resList } from "../../config/MOCK_DASHBOARD_DATA"; 
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../../config/constants";
import BodyTopContainer from "./BodyTopContainer";
import Shimmer from "./Shimmer";

const Body = () => {
    const defaultRestaurants = [];
    const [ restaurants, setRestaurants ] = useState(defaultRestaurants);
    const [ filteredRestaurants, setFilteredRestaurants ] = useState(defaultRestaurants);

    useEffect(() => {
       fetchRestaurants();
    }, []);

    const fetchRestaurants = async() => {
        try {
            const result = await fetch(SWIGGY_API_URL);
            if(result) {
                const json = await result.json();
                updateRestaurants(json);
            } else { // Fallback data if swiggy changes it's api
                updateRestaurants(resList);            
            }
        } catch(e) {
            console.log("Error on fetching Restaurants:", e);
            updateRestaurants(resList);
        }
    }

    const updateRestaurants = (json) => {
        let resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if(!resData) // Fallback data if swiggy changes it's api's response obj structure
            resData = resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestaurants(resData);
        setFilteredRestaurants(resData);
    }

    const showTopRestaurants = () => {
        const top = restaurants.filter(x => x.info.avgRating >= 4.5);
        setRestaurants(top);
    }

    const searchRestaurants = (str) => {
        str = (str || '').toLowerCase();
        if(!str) return setFilteredRestaurants(restaurants);
        const searchResult = restaurants.filter(x => (x.info.name || '').toLowerCase().includes(str));
        setFilteredRestaurants(searchResult);
    }

    return (
        <>
            <BodyTopContainer showTopRestaurants={showTopRestaurants} searchRestaurants={searchRestaurants}/>
            {
                !restaurants.length ? 
                    <Shimmer /> : 
                    <RestaurantContainer restaurants={filteredRestaurants}/>
            }
            
        </>
    )
}

export default Body;