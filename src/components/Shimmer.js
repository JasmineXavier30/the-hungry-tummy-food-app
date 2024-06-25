const Shimmer = () => {
    let cards = [];
    for(let i=0; i<20; i++) {
        cards.push(<div key={i} className="w-[250px] h-96 border-lime-500 shadow-lg bg-lime-200 rounded-lg m-4 p-4"><div className="w-52 h-52 bg-lime-300 rounded-lg"></div></div>);
    }

    return (
        <div className="flex flex-wrap justify-around">{cards}</div>
    )
}

export default Shimmer;