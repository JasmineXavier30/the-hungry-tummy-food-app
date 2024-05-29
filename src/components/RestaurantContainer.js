import RestaurantCard from "./RestaurantCard";
import resList from "../../config/MOCK_DATA"; 

const RestaurantContainer = () => {
    return <div className="res-container">
        {
            resList.map(res => <RestaurantCard key={res.info.id} res={res}/>)
        }
        
    </div>
}

export default RestaurantContainer;