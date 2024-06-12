import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//We have dynamic routes for all the restaurants and we are doing an API call in these routes.
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants"; --> used in the custom hook we created in the separate file.
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null); // we are creating useRestaurantMenu custom hook. so it doesnt need to manage its own state.

  const { resId } = useParams();
  // console.log(resId);
  const dummy = "Dummy Data";
  // useEffect(()=>{
  //     fetchMenu();
  // }, []); // empty dependency array -> call the API just once after the very first render.

  // const fetchMenu = async () => {
  //     const data = await fetch(MENU_API + resId);
  //     // "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"

  //     const json = await data.json();
  //     setResInfo(json.data);
  // };

  // ----------------------> Custom Hook <----------------------
  // We will create our very own customhook named useRestaurantMenu which will take resId as its argument
  // and will return resInfo. Previously we were using fetchMenu() inside the useEffect hook to call the API.
  // Now we will use our very own custom hook useRestaurantMenu to call the API and get the resInfo.

  // Create hook in a separate file in utils folder.

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // resInfo?.cards[4]?.card?.card?.itemCards;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/*categories accordion */}
      {categories.map((category, index) => (
        //controleed component.
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
