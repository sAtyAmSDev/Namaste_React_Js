import React from "react";

const SlokShimmer = () => {
  return (
    <div className="mt-5 flex gap-4 flex-col bg-white/80 lg:w-1/2 mx-auto shadow-sm shadow-gray-400/40 rounded-md p-2 sm:p-4 md:p-6">
      <h1 className="h-5 bg-gray-400/10 w-[20%] "></h1>
      <h1 className="h-5 bg-gray-400/10 w-[80%] "></h1>
      <h1 className="h-5 bg-gray-400/10 w-[10%] "></h1>
      <div className="flex gap-2 mt-8 flex-col">
        {new Array(15).fill(null).map((i,index) => (
          <div key={index} className="flex justify-between items-center gap-2  border-2 h-10 border-gray-400/40 rounded-lg px-5 text-sm w-full ">
            <h1 className="h-2 bg-gray-400/10 w-[80%] "></h1>
            <div className="h-2 bg-gray-400/10 w-[5%] "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlokShimmer;
