const BodyTopContainer = ({ showTopRestaurants, searchRestaurants }) => {
    return <div className="mx-10 my-5 text-center">
                <button className="bg-transparent rounded border border-lime-500 hover:bg-lime-300 hover:text-white px-4 py-2" id="top-rated-btn" onClick={() => showTopRestaurants()}>Top Rated Restaurants</button>
        <input data-testid="searchResInput" type='text' className="border mx-10 p-2 rounded border-lime-500 w-[30rem]" placeholder="Search Restaurants..." onChange={(e) => searchRestaurants(e.target.value)}/>
            </div>
}

export default BodyTopContainer;