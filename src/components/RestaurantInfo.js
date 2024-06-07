import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SWIGGY_RES_INFO_URL } from "../../config/constants";
import { allResInfo } from "../../config/MOCK_ALLRES_DATA";

const RestaurantInfo = () => {
    /** Show individual restaurant details and menu */
    const { id } = useParams(); // to get dynamic params from url/api endpoint (ex: "/restaurant/:id")
    const [resMenu, setResMenu] = useState(null);
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResInfo();
    }, []);

    const fetchResInfo = async () => {
        try {
            const result = await fetch(`${SWIGGY_RES_INFO_URL}${id}`);

            if (result) {
                const json = await result.json();
                const info = json?.data?.cards[2]?.card?.card?.info;
                const menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
                if (info && menu) {
                    setResInfo(info);
                    setResMenu(menu);
                }
                else {
                    getMockResData(id)
                }
            }
        } catch (e) {
            console.log("Error on fetching single restaurant info:", e);
            getMockResData(id);
        }
    }

    // Fallback data if swiggy api fails
    const getMockResData = () => {
        const json = allResInfo.find(x => x.id === id);
        const info = json.info;
        const menu = json.menu;
        setResInfo(info);
        setResMenu(menu);
    }

    if (resInfo === null || resMenu === null) return <Shimmer />;

    const { name, avgRating, locality, areaName, city, cuisines } = resInfo;
    return (
        <div className="res-info">
            <div className="res-details">
                <h1>{name}</h1>
                <h2>{avgRating}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{locality} - {areaName} - {city}</h3>
            </div>
            <div className="res-menu">
                <h2>Recommended</h2>
                <div>
                    {
                        (resMenu || []).map(menu => {
                            const { id, name, price, defaultPrice, description, isVeg } = menu.card.info;
                            return (
                                <div key={id}>
                                    <h4>{name}</h4>
                                    <h5>₹ {((price || defaultPrice) / 100).toFixed(2)}</h5>
                                    <p>{description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantInfo;