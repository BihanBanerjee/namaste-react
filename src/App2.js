// Now, I am going to create a complex html tree structure and render that.
// React element (Object) => HTML (Browser Understands)
import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id: "parent"},
    [
        React.createElement(
        "div",
        {id: "child"},
        //React.createElement("h1", {}, "I'm in h1 tag.") // I can also have mutiple children in that case we will be using an array.
        [React.createElement("h1", {}, "I'm in h1 tag."),
        React.createElement("h2", {}, "I'm in h2 tag.")]
    ),
    React.createElement(
        "div",
        {id: "child"},
        //React.createElement("h1", {}, "I'm in h1 tag.") // I can also have mutiple children in that case we will be using an array.
        [React.createElement("h1", {}, "I'm in h1 tag."),
        React.createElement("h2", {}, "I'm in h2 tag.")]
    )
]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);