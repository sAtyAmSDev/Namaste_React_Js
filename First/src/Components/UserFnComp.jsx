import { useState } from "react"

const UserFnComp = ({ name, age, location }) => {
    const [count] = useState(0)
    const [count2] = useState(1)
    return (
        <div>
            <h1>Make Count Variable in Fn Comp Count:{count} </h1>
            <h1>Count2 : {count2}</h1>
            <h1>UserFnComp</h1>
            <p>Name : {name} </p>
            <p>Age : {age}</p>
            <p >Location : {location}</p>
            <p></p>
        </div>
    )
}

export default UserFnComp