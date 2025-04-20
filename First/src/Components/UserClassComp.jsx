import React from 'react';
class UserClassComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "Satyam",
            location: "Pune"
        }
        console.log(this.props.name + "Child Constructor");
    }
    async componentDidMount() {
        // const Data = await fetch("https://api.github.com/users/sAtyAmSDev")
        // const json = await Data.json()
        // console.log(json)
        // this.setState({
        //     ...json
        // })

       this.TimeInterval= setInterval(() => {
            console.log("Interval");
            
        }, 1000);
        console.log(this.props.name + "Child ComponentDidMount");
    }


    componentDidUpdate() {
        console.log(this.props.name + "Child componentDidUpdate")
    }
    componentWillUnmount(){
        clearInterval(this.TimeInterval)
        console.log(this.props.name + "Child componentWillUnmount")
    }
    render() {
        console.log(this.props.name + "Child Render");
        const { count, location, name, avatar_url } = this.state;
        return (
            <div>
                <h1>UserClassComp</h1>
                <p>Name : {name} </p>
                <p >Location : {location}</p>
                <img src={avatar_url} alt="" />
                <p></p>
            </div>
        )
    }
}

export default UserClassComp