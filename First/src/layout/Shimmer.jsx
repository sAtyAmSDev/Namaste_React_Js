import { Link } from "react-router";

const Shimmer = () => {
  return (
    <div className=" flex flex-row flex-wrap gap-5 mt-10 md:px-2 px-5 w-full justify-center ">
      {new Array(6).fill(null).map((i,index) => {
        return (
          <div key={index} className="card flex flex-col item-start gap-2 w-96  bg-gray-400/10 p-5 rounded-md  ">
            <h1 className="Title text-md font-semibold gap-2  bg-gray-400/10 p-5 rounded-md w-full ">
              {" "}
            </h1>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-500 gap-2  bg-gray-400/10 p-5 rounded-md w-1/4 "></span>
              <h1 className="Title text-md font-semibold gap-2  bg-gray-400/10 p-5 rounded-md w-1/4 ">
                {" "}
              </h1>
            </div>
            <div className="flex gap-2  flex-col">
              <span className="text-sm  gap-2  bg-gray-400/10 p-5 rounded-md "></span>
              <p className="Description gap-2  bg-gray-400/10 p-5 rounded-md "></p>
              <p className="Description gap-2  bg-gray-400/10 p-5 rounded-md "></p>
            </div>

            <p className=" w-1/4  bg-gray-400/10 p-5 rounded-md   "></p>
          </div>
        );
      })}
    </div>
  );
};
export default Shimmer;
