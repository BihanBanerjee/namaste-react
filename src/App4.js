// React components
// Class Based components - OLD
// Functional Components - NEW

// Inside the jsx element if we give curly braces then inside that we can write JS code.

import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Om Nama Shivay</span> // this is none but a js variable. 
// We will use this variable in our component using curly braces.
// React Functional Component -> just a JS function (just start namimg it with a capital letter.) which returns some jsx element =>(gets transpiled to) react element => ReactElement-JS Object => HTMLElement(render)
const HeadingComponent = () => {
    return <h1 className="head">Namaste React Functional Component</h1>
}

const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1> // cooler way to code the arrow function.

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
)

// component composition.

// const data = api.getData(); 

//suppose this is a malicious API, An attacker is trying to send a 
// malicious code that will get executed {data}. Whatever the API is sending, we are executing
// that piece of code in your browser/laptop. {data} So in this way the attackers can take control 
// over your browser and can do some harm to you by accessing your local storage, cookies etc
// (Cross site scripting).but the JSX provides you an additional security, It actually sanitizes 
// the data to escape these kind of malicious atttack.

const HeadingComponent3 = () => (
<div id="container">
    {Title()}
    <Title></Title>
    <Title /> 
    {100 + 200}
    {/* {data} */}
    <br/>
    {elem}
    <h1 className="heading1">
        Namaste React Functional Component
    </h1>
</div> // now if you wanted to write this jsx element using React.createElement, you would have been under deep water. It is way more easier to use jsx components rather than React.createElement
); // mutiple lines of jsx wrap inside parantheses.




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent3); // this is how we render a react element.
root.render(<HeadingComponent3 />); // but to render a react component we need to put angular bracket like this. as if it is going in as a tag.
