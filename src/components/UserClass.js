import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props); // this line is mandatory.
    // console.log(props);

    // console.log("Child Constructor");
    this.state = {
      // count: 0,
      // count2: 1
      userInfo: {
        name: "Dummy data",
        location: "Default",
        avatar_url: "https://picsum.photos/200/300",
      },
    }; //this.state is a big object that'll contain all the state variables.
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child ComponentDidMount");
    // componentDidMount method is called after the render method.
    // API is called inside this componentDidMount method. but why?
    // --> Got to know after Akshay Saini video.

    const data = await fetch("https://api.github.com/users/bihanbanerjee");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  } //form our webpage when the component will be unmounted.
  // Mounting -> Showing into the UI
  // Unmounting -> removing from the UI --> cleaning out of the UI.
  // when I'll go to a new page then the component will be unmounted and just before unmouting it or removing it from the UI, React will call the componentWillUnmount method.
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const {count} = this.state;

    // const {count, count2} = this.state;

    console.log("Child Render");

    // return(
    //     <div className="user-card">
    //     <h1>
    //         {/* Count = {this.state.count} */}
    //         Count = {count}
    //     </h1>
    //     <button onClick={()=>{
    //         // NEVER UPDATE STATE VARIABLES DIRECTLY.
    //         // count = count + 1;
    //         this.setState({
    //             count: count + 1,
    //             count2 : count2 + 1
    //             // you can batch these state variables up and update them together.
    //     })}}>Count Increase</button>
    //     <h1>
    //         {/* Count2 = {this.state.count2} */}
    //         Count2 = {count2}
    //     </h1>
    //     <h2>
    //         {/* Name: {this.props.name} */}
    //         Name: {name}
    //     </h2>
    //     <h3>
    //         {/* Location: {this.props.location} */}
    //         Location: {location}
    //     </h3>
    //     <h4>
    //         Contact: @bihanmarch7
    //     </h4>
    // </div>
    // );

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>
          {/* Name: {this.props.name} */}
          Name: {name}
        </h2>
        <h3>
          {/* Location: {this.props.location} */}
          Location: {location}
        </h3>
        <h4>Contact: @bihanmarch7</h4>
      </div>
    );
  }

  /**
   * --------MOUNTING----------
   * Constructor is called first time. (Constructor updates the state with dummy data.)
   * Render is called second.(Render happens with dummy data.)
   * The component has dummy data on to the webpage for few miliseconds. <HTML Dummy>
   * ComponentDidMount is called after the 1st render.
   *      <API CALL> API call is called inside the componentDidMount method.
   *      then we did the this.setState.<this.setState> --> state variable is updated.
   * This finishes our mounting life cycle.
   * Once the monunting cycle is finihed the Updating cycle starts.
   * ---------UPDATING----------
   * so, lastly in the Mounting cycle, setState was called. It triggers the reconciliation process and update cycle. Now the update cycle starts.
   * render is called with the API data. render(API data)
   * <HTML (new API data) />
   * then it will call componentDidUpdate.
   *
   */
}

export default UserClass;

// When I say I am loading a class-based component on our web page, I am actually creating an instance of the class.
// So, whenever you create an instance of a class, the constructor is called, so, this is the best place to receive the props.
// and this is the best place to create state variables.

// Earlier we used to write class-based components. now we mostly write functional components. React has simplified things alot.

// Never ever compare life-cycle methods with functional components.
// useEffect in functional component is not "totally equal" to componentDidMount method in class based components.

