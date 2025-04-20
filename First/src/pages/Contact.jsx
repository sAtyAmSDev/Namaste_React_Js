import { useEffect } from "react"

const Contact = () => {
    useEffect(() => {
        const TimeInterval = setInterval(() => {

            console.log("Interval")
        }, 1000)

        return () => {
            clearInterval(TimeInterval)
            console.log("UseEffect Return");

        }
    }, [])

    console.log("Contact Render");
    return (
        <div className="Contact">
            <h1>Contact Page</h1>
            <p>This is the contact page.</p>
          
        </div>
    )
}
export default Contact