// It is recommended by React community folks to start naming the component name by an upper-case letter.
import { restaurants } from "../utils/mockData.js";
import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";

import { useContext, useEffect, useState } from "react";

import Shimmer from "./Shimmer.js";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext.js";

const Body = () => {
  // console.log("Body-rendered");
  // Local State Variable - Super powerful state variable.
  // const [listOfRestaurants, setListOfRestaurants] = useState([restaurants]); // state variable. -> pass the initial value as an argument.
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // state variable. -> pass the initial value as an argument.

  // Array destructuring ☝️👆☝️👆☝️👆☝️👆
  // whenever the state variable changes React will re-render the component.
  // Normal JS Variable
  // let listOfRestaurants = [];

  // Normal JS Variable.
  // let listOfRestaurantsJS = [
  // {
  //     "info": {
  //     "id": "149385",
  //     "name": "First Choice Biryani",
  //     "cloudinaryImageId": "b9c38ddd125fc2182cc7c0d12757bbf1",
  //     "locality": "Gt Road",
  //     "areaName": "Bardhaman Locality",
  //     "costForTwo": "₹300 for two",
  //     "cuisines": [
  //       "Biryani",
  //       "North Indian",
  //       "Chinese"
  //     ],
  //     "avgRating": 4.3,
  //     "parentId": "79702",
  //     "avgRatingString": "4.3",
  //     "totalRatingsString": "10K+",
  //     "sla": {
  //       "deliveryTime": 19,
  //       "lastMileTravel": 2,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "15-20 mins",
  //       "lastMileTravelString": "2.0 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2024-04-10 22:30:00",
  //       "opened": true
  //     },
  //     "badges": {
  //       "imageBadges": [
  //         {
  //           "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
  //           "description": "OnlyOnSwiggy"
  //         }
  //       ]
  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {
  //           "badgeObject": [
  //             {
  //               "attributes": {
  //                 "description": "OnlyOnSwiggy",
  //                 "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
  //               }
  //             }
  //           ]
  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "₹125 OFF",
  //       "subHeader": "ABOVE ₹249",
  //       "discountTag": "FLAT DEAL"
  //     },
  //     "loyaltyDiscoverPresentationInfo": {
  //       "logoCtx": {
  //         "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
  //       },
  //       "freedelMessage": "FREE DELIVERY",
  //       "badgeType": "BADGE_TYPE_ONE_LITE"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/first-choice-biryani-gt-road-bardhaman-locality-bardhaman-149385",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //   "info": {
  //     "id": "366264",
  //     "name": "Domino's Pizza",
  //     "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
  //     "locality": "BC Road",
  //     "areaName": "Ichlabad",
  //     "costForTwo": "₹400 for two",
  //     "cuisines": [
  //       "Pizzas",
  //       "Italian",
  //       "Pastas",
  //       "Desserts"
  //     ],
  //     "avgRating": 4.5,
  //     "parentId": "2456",
  //     "avgRatingString": "4.5",
  //     "totalRatingsString": "500+",
  //     "sla": {
  //       "deliveryTime": 25,
  //       "lastMileTravel": 0.5,
  //       "serviceability": "SERVICEABLE",
  //       "slaString": "25 mins",
  //       "lastMileTravelString": "0.5 km",
  //       "iconType": "ICON_TYPE_EMPTY"
  //     },
  //     "availability": {
  //       "nextCloseTime": "2024-04-10 23:57:00",
  //       "opened": true
  //     },
  //     "badges": {

  //     },
  //     "isOpen": true,
  //     "type": "F",
  //     "badgesV2": {
  //       "entityBadges": {
  //         "imageBased": {

  //         },
  //         "textBased": {

  //         },
  //         "textExtendedBadges": {

  //         }
  //       }
  //     },
  //     "aggregatedDiscountInfoV3": {
  //       "header": "20% OFF",
  //       "subHeader": "UPTO ₹50"
  //     },
  //     "loyaltyDiscoverPresentationInfo": {
  //       "logoCtx": {
  //         "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
  //       },
  //       "freedelMessage": "FREE DELIVERY",
  //       "badgeType": "BADGE_TYPE_ONE_LITE"
  //     },
  //     "differentiatedUi": {
  //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       "differentiatedUiMediaDetails": {
  //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //         "lottie": {

  //         },
  //         "video": {

  //         }
  //       }
  //     },
  //     "reviewsSummary": {

  //     },
  //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     "restaurantOfferPresentationInfo": {

  //     }
  //   },
  //   "analytics": {

  //   },
  //   "cta": {
  //     "link": "https://www.swiggy.com/restaurants/dominos-pizza-bc-road-ichlabad-bardhaman-366264",
  //     "type": "WEBLINK"
  //   }
  // },
  // {
  //     "info": {
  //       "id": "727066",
  //       "name": "Baskin Robbins - Ice Cream Desserts",
  //       "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
  //       "locality": "G T ROAD",
  //       "areaName": "BURDWAN MUNICIPALITY",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Desserts",
  //         "Ice Cream"
  //       ],
  //       "avgRating": 4.6,
  //       "veg": true,
  //       "parentId": "5588",
  //       "avgRatingString": "4.6",
  //       "totalRatingsString": "100+",
  //       "sla": {
  //         "deliveryTime": 15,
  //         "lastMileTravel": 0.7,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "15-20 mins",
  //         "lastMileTravelString": "0.7 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-04-11 00:00:00",
  //         "opened": true
  //       },
  //       "badges": {

  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {

  //           },
  //           "textBased": {

  //           },
  //           "textExtendedBadges": {

  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "40% OFF",
  //         "subHeader": "UPTO ₹80"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY",
  //         "badgeType": "BADGE_TYPE_ONE_LITE"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {

  //           },
  //           "video": {

  //           }
  //         }
  //       },
  //       "reviewsSummary": {

  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {

  //       }
  //     },
  //     "analytics": {

  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-g-t-road-burdwan-municipality-bardhaman-727066",
  //       "type": "WEBLINK"
  //     }
  // }
  // ];
  const [searchText, setSearchText] = useState("");
  // Whenever state variables update, react riggers a reconciliation cycle(re-renders the component).
  /*
    useEffect(()=>{
      console.log("useEffect Called");
    }, []); // We have written useEffect inside Body function, right? So, Body fxn gets called ---> Component(what the fxn returns) gets rendered ----> after teh render cycle the callback fxn inisde the useEffect() fxn gets executed.
    // The callback fxn (passed as an arg inside the useEffect() fxn) gets executed after the component has been rendered.

    console.log("Body rendered"); // as it is inside the Body fxn, it will get executed at first and then the callback fxn of the useEffect hook will get executed after the component has been rendered.
    */
  // console.log(listOfRestaurants);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardWithTopRating = withTopRatedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.22586&lng=87.880712&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    
    const json = await data.json();
    // console.log(json.cards);

    // console.log(json);
    let arr1 =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // let arr2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(arr1);
    // let finalList = arr1.concat(arr2);
    setListOfRestaurants(arr1);
    setFilteredRestaurants(arr1);
    // setListOfRestaurants(arr2);
  };

  //  if(listOfRestaurants.length === 0){
  //   return <h1>Loading...</h1>;
  //  }

  // conditional rendering.👇🏻

  //  if(listOfRestaurants.length === 0){
  //   return <Shimmer />;
  //  }
  // Just used ternary operator.
  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <div>
        <h1>Please check your internet connection!!!🙅🏻🙅🏻🙅🏻</h1>
        <h2>You are offline!!!</h2>
      </div>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    // <div className="body">
    //     <div className="filter">
    //       <div className="search">
    //         <input
    //         type="text"
    //         className="search-box"
    //         value={searchText}
    //         onChange={(e) => {setSearchText(e.target.value);
    //         }}
    //       />
    //         <button onClick={()=>{
    //           //Filter the restaurants and update the UI.
    //           //searchText
    //           //console.log(searchText);

    //           const filteredRes = listOfRestaurants.filter((res)=>{
    //             return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    //           });
    //           //console.log(filteredRes);
    //           setFilteredRestaurants(filteredRes);

    //         }}>Search</button>
    //       </div>
    //       <button className="filter-btn"
    //       onClick={()=>{
    //           const filteredList = listOfRestaurants.filter(
    //               (res)=> res.info.avgRating >= 4.5
    //           );
    //           setFilteredRestaurants(filteredList)
    //           //console.log(listOfRestaurants);
    //       }}
    //       >
    //           Top Rated Restaurants
    //       </button>
    //     </div>
    //     <div className="res-container">
    //         { filteredRestaurants.map((restaurant) => (
    //           <Link
    //           key ={restaurant.info.id}
    //           to = {"restaurants/"+ restaurant.info.id}
    //           >
    //             <RestaurantCard resData={restaurant} />
    //           </Link>
    //         ))}
    //     </div>
    // </div>
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter the restaurants and update the UI.
              //searchText
              //console.log(searchText);

              const filteredRes = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              //console.log(filteredRes);
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          {/* <button className="px-4 py-2 bg-gray-100 rounded-lg" 
              onClick={()=>{
                  const filteredList = listOfRestaurants.filter(
                      (res)=> res.info.avgRating >= 4.5
                  );
                  setFilteredRestaurants(filteredList)
                  //console.log(listOfRestaurants);
              }}
              >
                  Top Rated Restaurants
              </button> */}
          <label>UserName: </label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap items-center justify-between gap-4 px-12">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRatingString >= 4.3 ? (
              <RestaurantCardWithTopRating resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;