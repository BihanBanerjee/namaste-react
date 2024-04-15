// React components
// Class Based components - OLD
// Functional Components - NEW

import React from "react";
import ReactDOM from "react-dom/client";

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

const HeadingComponent3 = () => (
<div id="container">
    <Title /> 
    <h1 className="heading1">
        Namaste React Functional Component
    </h1>
</div>
); // mutiple lines of jsx wrap inside parantheses.




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent3); // this is how we render a react element.
root.render(<HeadingComponent3 />); // but to render a react component we need to put angular bracket like this. as if it is going in as a tag.


// Inside the jsx element if we give curly braces then inside that we can write JS code.

