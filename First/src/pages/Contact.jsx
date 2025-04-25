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
        <div className="Contact px-5 md:px-10 mt-5 flex justify-center flex-col ">
            <h1 className="text-md">Contact Page</h1>
            <p className="text-sm">This is the contact page.</p>
          
        </div>
    )
}
export default Contact