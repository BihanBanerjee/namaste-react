import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);
    const { name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId } = resData?.info
    // return (
    // <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
    //     <img 
    //         className="res-logo"
    //         alt="res-logo"
    //         src={CDN_URL + cloudinaryImageId}
    //     />
    //     <h3>{name}</h3>
    //     <h4>{cuisines.join(", ")}</h4>
    //     <h4>{avgRating}</h4>
    //     <h4>Delivered in {sla.deliveryTime} minutes</h4>
    //     <h4>{costForTwo}</h4>
    // </div>
    // )
    return (
        <div className=" p-4 w-[250px] h-[380px] rounded-lg bg-gray-100 hover:bg-gray-400" 
        // style={{backgroundColor: "#f0f0f0"}}
        >
            <img  
                className="rounded-lg w-full h-[140px] object-cover"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg" >{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>Delivered in {sla.deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
            <h4>{loggedInUser}</h4>
        </div>
        )
}

// Higher Order Component
// input -> RestaurantCard ===> output -> RestaurantCardTopRated

export const withTopRatedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                {/* had problem using absolute in tailwind css below in the className */}
                <label className="absolute bg-red-500 p-2 text-white ">
                    4.3+
                </label> 
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;