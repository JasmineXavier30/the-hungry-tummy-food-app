import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";

const PromotedResCard = withPromotedLabel(RestaurantCard);

const RestaurantContainer = ({ restaurants }) => {
    return <div className="flex flex-wrap justify-around">
        {
            
            restaurants.map((res, index) => <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
                    {
                        (index % 2 === 0) ? <PromotedResCard res={res}/> : <RestaurantCard res={res} />
                    }
                </Link>
            )
        }
        
    </div>
}

export default RestaurantContainer;