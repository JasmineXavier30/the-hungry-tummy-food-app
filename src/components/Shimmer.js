const Shimmer = () => {
    let cards = [];
    for(let i=0; i<20; i++) {
        cards.push(<div key={i} className="res-card res-shimmer-card"><div className="res-image res-shimmer-image"></div></div>);
    }

    return (
        <div className="res-container">{cards}</div>
    )
}

export default Shimmer;