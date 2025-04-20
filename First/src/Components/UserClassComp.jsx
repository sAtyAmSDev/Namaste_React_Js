import React from 'react';
class UserClassComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1,
        }
        console.log(this.props.name + "Child Constructor");
    }
    componentDidMount() {
        console.log(this.props.name + "Child ComponentDidMount");
    }
    render() {
        console.log(this.props.name + "Child Render");
        const { name, age, location } = this.props;
        const { count, count2 } = this.state;
        return (
            <div>
                <h1>Make Count Variable in Class Comp Count: {count} </h1>
                <h1>Count2 : {count2}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count + 1,
                        count2: count2 + 1
                    })
                }}>Count +</button>
                <h1>UserClassComp</h1>
                <p>Name : {name} </p>
                <p>Age : {age}</p>
                <p >Location : {location}</p>
                <p></p>
            </div>
        )
    }
}

export default UserClassComp