import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenuCategory = ({ category, showItems, toggleItemListDisplay }) => {
    return (
        <div className="border border-lime-500 my-5 p-5 shadow-lg w-6/12 mx-auto rounded bg-lime-50">
            <div className="flex justify-between cursor-pointer" onClick={toggleItemListDisplay}>
                <span className="text-lg font-bold">{category.title} ({category.itemCards.length})</span>
                <span className="up-down-arrow">🔽</span>
            </div>
            {showItems &&
                <div>
                    {
                        category.itemCards.map(items => {
                            return <ItemList info={items.card.info} key={items.card.info.id} />
                        })
                    }
                </div>
            }

        </div>
    )
}

export default RestaurantMenuCategory;