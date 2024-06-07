import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantContainer = ({ restaurants }) => {
    return <div className="res-container">
        {
            restaurants.map(res => <Link to={`/restaurant/${res.info.id}`} key={res.info.id}><RestaurantCard res={res}/></Link>)
        }
        
    </div>
}

export default RestaurantContainer;