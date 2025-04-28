import React from "react";
import UserClassComp from "../Components/UserClassComp";
import UserFnComp from "../Components/UserFnComp";
import UserContext from "../Components/Utils/UserContext.jsx";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="about px-5 md:px-10 mt-5 flex justify-center flex-col ">
                <h1 className="text-md">About Page</h1>
                <p className="text-sm">This is the about page of our application.</p>

                <div>{
    <UserContext.Consumer>
        {({logInUser})=><h2  className="text-md font-semibold">{logInUser}</h2>}
    </UserContext.Consumer>
    }</div>

                {/* <UserClassComp name={"First"} age={"19"} location={"pune"} /> */}

            </div>
        );
    }
}

export default About;
