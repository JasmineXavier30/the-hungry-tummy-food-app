const BodyTopContainer = ({ showTopRestaurants, searchRestaurants }) => {
    return <div className="body-top-container">
                <button className="btn" id="top-rated-btn" onClick={() => showTopRestaurants()}>Top Rated Restaurants</button>
                <input type='text' className="search-text" placeholder="Search Restaurants..." onChange={(e) => searchRestaurants(e.target.value)}/>
            </div>
}

export default BodyTopContainer;