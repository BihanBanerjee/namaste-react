import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
//import Grocery from "./Grocery";

const Header = () => {
  // console.log("Header-render");
  // let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  // Always use useState inside a functional component. Because :--->
  // useState is always used to create local state variables inside your functional compponents
  // try to create it at the top of the functional component. (good pactice) ✅✅✅
  // never use useState inside if-else statement or loop(for, while, do while etc.).

  // If no dvependency array => useEffect is called on every render.
  // If the dependency array is empty => useEffect is called on initial render(just once when the component is rendered for the very first time)
  // If dependency array is [btnNameReact] => called everytime btnNameReact is updated.
  // useEffect(()=>{
  //     console.log("useEffect called!!!");
  // }, [btnNameReact]);

  // Earlier return used to look like this. component is nothing but JS fxn returning jsx elements. ---->
  //     return (
  //     <div className="header">
  //         <div className="logo-container">
  //             <img className="logo" src={LOGO_URL} />
  //         </div>
  //         <div className="nav-items">
  //             <ul>
  //                 <li>
  //                     Online Status : {useOnlineStatus() ? "✅" : "🔴"}
  //                 </li>
  //                 <li>
  //                     <Link to="/"> Home </Link>
  //                 </li>
  //                 <li>
  //                     {/* <a href = "/about"> About Us </a>  */}
  //                     {/* Never go to a new page using an anchor tag as it will reload the whole page. */}
  //                     {/* React provides you Link component using which you can go to new page without the whole page being relaod. */}
  //                     <Link to = "/about"> About Us </Link>
  //                 </li>
  //                 <li>
  //                     <Link to="/contact"> Contact Us </Link>
  //                 </li>
  //                 <li>
  //                     <Link to="/grocery"> Grocery </Link>
  //                 </li>
  //                 <li>Cart</li>
  //                 <button className="login" onClick={()=>{
  //                     btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
  //                     //                          ☝️☝️☝️ the above change is not instantaneous.
  //                     // whenever the state var changes, React will re-render the header component. //calling the component fxn is equivalent to that component being rendered.
  //                     // console.log(btnName);
  //                     //console.log(btnNameReact);
  //                 }}>
  //                     {btnNameReact}
  //                 </button>
  //             </ul>
  //         </div>
  //     </div>
  // )

  /*
      const data = useContext(UserContext);
      // console.log(data);
      // const {loggedInUser} = data;
  */
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector.

  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {useOnlineStatus() ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            {/* <a href = "/about"> About Us </a>  */}
            {/* Never go to a new page using an anchor tag as it will reload the whole page. */}
            {/* React provides you Link component using which you can go to new page without the whole page being relaod. */}
            <Link to="/about"> About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart"> Cart 🛒({cartItems.length}) </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // 👆the above change is not instantaneous.
              // whenever the state var changes, React will re-render the header component. //calling the component fxn is equivalent to that component being rendered.
              // console.log(btnName);
              //console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
