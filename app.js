const heading = React.createElement(

    "h1", 
{id: "heading", xyz: "abc"},
"Hello World from React!"

);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // heading is a react-element which is a JS object. Browser converts these objects to appropriate HTML tags.

// root.render is the thing that is rendering our heading element inisde the 
// root. So, in react we need to create a root first. Everything will be rendered
// inside that root only. then we render the element(react-element) inside that root by doing
// root.render(element).