import React from "react";
import UserClassComp from "../Components/UserClassComp";
import UserFnComp from "../Components/UserFnComp";

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
            <div className="about">
                <h1>About Page</h1>
                <p>This is the about page of our application.</p>

                <UserClassComp name={"Satyam"} age={"19"} location={"pune"} />
            </div>
        );
    }
}

export default About;
