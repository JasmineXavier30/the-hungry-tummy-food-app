import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RES_INFO_URL } from "../../../config/constants";
import { allResInfo } from "../../../config/MOCK_ALLRES_DATA";

const useRestaurantMenu = () => {
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
                let menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                //console.log(menu)
                menu = menu.filter(x => x.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
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
        const info = json?.info;
        const menu = json?.menu;
        setResInfo(info);
        setResMenu(menu);
    }

    return [resInfo, resMenu]
}

export default useRestaurantMenu;