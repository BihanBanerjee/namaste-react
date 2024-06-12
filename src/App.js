/*
 const heading = React.createElement(

     "h1", 
 {id: "heading", xyz: "abc"},
 "Hello World from React!"

 );

 console.log(heading);

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading); // heading is a react-element which is a JS object. Browser converts these objects to appropriate HTML tags.
*/

// some info to look at given below.
// root.render is the thing that is rendering our heading element inisde the
// root. So, in react we need to create a root first. Everything will be rendered
// inside that root only. then we render the element(react-element) inside that root by doing
// root.render(element).

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => ReactElement-JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Jay Shree Ram 🏹",
); // heading is an JS object. This is how we create react element using react.

// JSX --->

const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM for rendering to the browser.

// JSX is HTML like syntax but not HTML. We had class in html but in jsx we have className. though it will later get converted to html tag with class attribute. we do camelcase in jsx.
const jsxHeading = (
  <h1 id="heading" className="head">
    {" "}
    Jay Shree Ram 🏹
  </h1>
);
/*
 * proper valid syntax in jsx. jsxHeading is a valid React element. We don't
 * need to create react element like we did before(very tedious and not developer-friendly.) So, this is how we create react
 * element using jsx. The above line is not pure JS. JS engine doesnt understand this h1 tag. This is not proper JavaScript.
 * but how things are going right then? how we can I see the page rendered? The parcel package under the hood is doing this.
 * The jsx code is transpiled before it reaches to JS engine(transpiled to code that is understandable by the browser)
 * by parcel. but the question is does parcel transpile the code on its own? No, Parcel acts as a manager. it basically gives
 * the responsibility of transpilation to another package called babel. now, the question arises I never installed babel, but
 * it was automatically installed by parcel as its dependency package.
 * jsx---> babel ---> code understandable by the browser/JS engine/ React.
 * Babel is not created by Meta/Facebook.
 */

// JSX =>(Babel transpiles JSX to ->) React.createElement => ReactElement-JS Object => HTMLElement(render)
console.log(heading);
console.log(jsxHeading);

// we will see that we will get a similar, same output. No difference.

const jsxHeadingMultiLines = (
  <h1 id="heading" className="head">
    Jay Shree Ram 🏹
  </h1>
); // If you want to declare a jsx tag in multiple lines then it is recommended use parentheses to wrap it. you can also
// wrap it for single line declaration but not mandotory. but for multiline declaration it is mandatory to put parantheses.

// root.render(heading);
root.render(jsxHeading);
