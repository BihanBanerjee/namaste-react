import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Header from "./components/Header.js"; //if you dont give .js then also it's fine.
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery.js"; // will lazy-load this component.
// First resObj
// const resObj = {
//     "info": {
//         "id": "366264",
//         "name": "Domino's Pizza",
//         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
//         "locality": "BC Road",
//         "areaName": "Ichlabad",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//         "Pizzas",
//         "Italian",
//         "Pastas",
//         "Desserts"
//         ],
//         "avgRating": 4.5,
//         "parentId": "2456",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "500+",
//         "sla": {
//         "deliveryTime": 25,
//         "lastMileTravel": 0.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25 mins",
//         "lastMileTravelString": "0.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//         "nextCloseTime": "2024-04-10 23:57:00",
//         "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//         "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//         }
//         },
//         "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//         },
//         "loyaltyDiscoverPresentationInfo": {
//         "logoCtx": {
//             "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//         },
//         "freedelMessage": "FREE DELIVERY",
//         "badgeType": "BADGE_TYPE_ONE_LITE"
//         },
//         "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//         }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//     },
//     "analytics": {

//     },
//     "cta": {
//         "link": "https://www.swiggy.com/restaurants/dominos-pizza-bc-road-ichlabad-bardhaman-366264",
//         "type": "WEBLINK"
//     }
// }

// Second resObj
// const resObj = {
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
//   }

// const styleCard = {
//     backgroundColor: "#f0f0f0",
// };

// const RestaurantCard = ({resName, cuisine}) => (
//     <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//         <img
//             className="res-logo"
//             alt="res-logo"
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sv4bqbbuvl4y0axgwrkx"
//         />
//         <h3>{resName}</h3>
//         <h4>{cuisine}</h4>
//         <h4>4.4 stars</h4>
//         <h4>38 minutes</h4>
//     </div>

// )

// got from the API of Swiggy.

// not using keys(not acceptable) <<<<<<< index as key <<<<<<<<<<< unique id(best practice)

// Top-level component

const Grocery = lazy(() => {
  console.log("Grocery component is being loaded");
  return import("./components/Grocery");
}); // lazy loading is a named import from react.
const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      //name: "Akshay Bhai",
      name: "",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* <UserContext.Provider value={{loggedInUser: "Elon Musk"}}> */}
        <Header />
        {/* <h1 className="text-xl">Hi Sushil.</h1> */}
        {/* <Body /> */}
        {/* </UserContext.Provider> */}
        <Outlet />
        {/* React actaully replaces/substitutes the Outlet component accordingly. React is beauty. */}
      </div>
    </UserContext.Provider>
  );
};
// createBrowserRouter function takes a list of objects and the objects define each path.
/*
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    },  
    {
        path: "/contact",
        element: <Contact />
    }
    
]);
*/
// Now we will learn about children routes. We want the header to be fixed. I just want the
// change in the Body section. child routing.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          // <Grocery />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", // every restaurant has their own unique id. So, my route will be uniquely different for different restaurants.
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />);

// Chunking
// Code splitting
// Dynamic Building
// lazy loading --> also known as on demand loading.
// dynamic import
