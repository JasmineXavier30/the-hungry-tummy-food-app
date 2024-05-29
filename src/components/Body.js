import RestaurantContainer from "./RestaurantContainer";

const Body = () => {
    return (
        <>
            <div className="search-div">
            <input type='text' className="search-text" />
            <button id="search-btn">Search</button> 
            </div>
            <RestaurantContainer />
        </>
    )
}

export default Body;