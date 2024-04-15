import { useRouteError } from "react-router-dom"; // using this hook we can get more information about the error.

const Error = () => {
    const err = useRouteError(); 
    console.log(err); // See how the err object looks like.
    // This is how we handle errors while routing.
    return (
        <div>
            <h1>{err.data}</h1>
            <h1> Oops!!! </h1>
            <h2> Something went wrong!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;