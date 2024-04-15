import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    async componentDidMount(){ // making the method asyn to call the API.
        console.log("Parent ComponentDidMount");
        // componentDidMount method is called after the render method.
        // API is called inside this componentDidMount method. but why? --> Got to know after Akshay Saini video.
    }

    // React component loads very first. React component does not wait for the API to be called --> return the result --> then load it.
    // In react, we want to render the component once, --> make the API call and then fill the data inside the component.
    // We dont want to wait for the API to return the data to render the component. Otherwise the component will not render. 
    // It will keep on waiting for the data to come from the API.
    // React wants to quickly render it -> then make an API call -> then render the component. This is why we use useEffect in functional component.
    // and similarly in the class based component we use the componentDidMount method. it is an asynchronous method.

    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>
                    About
                </h1>
                <h2>
                    This is Namaste React Web Series
                </h2>

                {/* <User name={"Bihan(function)"} /> */}

                <UserClass name={"Bihan(class)"} location = {"Dehradun(class)"} />
                {/* <UserClass name={"Elon Musk"} location = {"US"} /> */}
                
                {/* React will batch the render phase for these two childs (points to be noted). It's an optimization React provides. First the constructor and render of the first child will be called then the constructor and render of the second child will be called. Now the Render phase being finished the Commit phase(componentDidMount method to be precise) of these two children will be called.*/}

            </div>
            );
    }
}

// This is the wrog order of life cycles of components ❌❌❌
// 👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻
/*
  - Parent Construvtor
  - Parent Render
    - Akshay Constructor
    - Akshay Render
    - Akshay ComponentDidMount

    - Elon Constructor
    - Elon Render
    - Elon ComponentDidMount

  - Parent ComponentDidMount
 */
// 👆👆👆👆👆👆👆👆👆👆👆👆👆👆
// This is the wrog order of life cycles of components 👆👆👆👆👆👆👆👆👆👆👆👆👆👆

// The correct lifecycle method :-----> ✅✅✅
// React is not confusing us, It is just optimising. Then what is the correct order of life cycles of components.
// see below code. 👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻
/*

  - Parent Construvtor
  - Parent Render
    - Akshay Constructor
    - Akshay Render


    - Elon Constructor
    - Elon Render
    
    <DOM UPDATED - IN SINGLE BATCH>     --> DOM updation/manipulation is the most expensive part. So it should be done in single batch. (Batches the childs and then do the constructor and render method of them. This is a very important part of the render phase. It is an optimization. React provides it.)
    - Akshay ComponentDidMount
    - Elon ComponentDidMount

  - Parent ComponentDidMount
*/

// This is the right order of life cycles of components 👆👆👆👆👆👆👆👆👆👆👆👆👆👆



// const About = () => {
//     return (
//         <div>
//             <h1>
//                 About
//             </h1>
//             <h2>
//                 This is Namaste React Web Series
//             </h2>

//             {/* <User name={"Bihan(function)"} /> */}

//             <UserClass name={"Bihan(class)"} location = {"Dehradun(class)"}/>
//         </div>
//     )
// }

export default About;