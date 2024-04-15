import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    console.log("Header-render");
    // let btnName = "Login";    

    const [btnNameReact, setBtnNameReact] = useState("Login"); 
    // Always use useState inside a functional component. Because :--->
    // useState is always used to create local state variables inside your functional compponents
    // try to create it at the top of the functional component. (good pactice) ✅✅✅
    // never use useState inside if-else statement or loop(for, while, do while etc.).

    // If no dependency array => useEffect is called on every render.
    // If the dependency array is empty => useEffect is called on initial render(just once when the component is rendered for the very first time)
    // If dependency array is [btnNameReact] => called everytime btnNameReact is updated.
    useEffect(()=>{
        console.log("useEffect called!!!");
    }, [btnNameReact]);

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    {/* <a href = "/about"> About Us </a>  */}
                    {/* Never go to a new page using an anchor tag as it will reload the whole page. */}
                    {/* React provides you Link component using which you can go to new page without the whole page being relaod. */}
                    <Link to = "/about"> About Us </Link>
                </li>
                <li>
                    <Link to="/contact"> Contact Us </Link>    
                </li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    //                          ☝️☝️☝️ the above change is not instantaneous. 
                    // whenever the state var changes, React will re-render the header component. //calling the component fxn is equivalent to that component being rendered.
                    // console.log(btnName);
                    //console.log(btnNameReact);
                }}>
                    {btnNameReact}
                </button>
            </ul>
        </div>
    </div>
)
}

export default Header;