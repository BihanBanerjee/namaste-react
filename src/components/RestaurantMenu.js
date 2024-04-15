import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//We have dynamic routes for all the restaurants and we are doing an API call in these routes.
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    // console.log(resId);

    useEffect(()=>{
        fetchMenu();
    }, []); // empty dependency array -> call the API just once at the very first render.

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        // "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"

        const json = await data.json();
        setResInfo(json.data);
    };

    if(resInfo === null) return <Shimmer />;
    

    
    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    // resInfo?.cards[4]?.card?.card?.itemCards;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);


    return (
        <div className = "menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>{
                   return (<li key={item.card.info.id}>{item.card.info.name} - {" Rs."} 
                   { item.card.info.price/100 || item.card.info.defaultPrice/100 }
                   </li>)
                })}
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;