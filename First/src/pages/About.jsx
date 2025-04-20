import UserClassComp from "../Components/UserClassComp"
import UserFnComp from "../Components/UserFnComp"

const About = () => {
    return (
        <div className="about">
            <h1>About Page</h1>
            <p>This is the about page of our application.</p>
   
            <div>
{/* <UserFnComp name={"Satyam"} age={"19"} location={"pune"} /> */}
<UserClassComp name={"Satyam"} age={"19"} location={"pune"} />
            </div>
        </div>



    )
}

export default About