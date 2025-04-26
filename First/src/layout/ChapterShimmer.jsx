import React from "react";

const ChapterShimmer = () => {
  return (
    <div className="mt-5 h-full bg-white/80 mb-10 px-2 py-5 md:px-10 w-full overflow-hidden flex flex-col gap-7">
      <div className=" flex flex-col gap-2">
        <h1 className="w-[20%] p-3 bg-gray-400/10"></h1>
        <h1 className="w-[20%] p-3 bg-gray-400/10"></h1>
      </div>
      <div className=" flex flex-col gap-2">
        <span className="w-[10%] p-3 bg-gray-400/10"></span>
        <h1 className="w-[20%] p-3 bg-gray-400/10"></h1>
        <h1 className="w-[20%] p-3 bg-gray-400/10"></h1>
      </div>
      <div className=" flex flex-col gap-5">
        <span className="w-[10%] p-3 bg-gray-400/10"></span>
        <h1 className="w-[20%] p-3 bg-gray-400/10"></h1>
        <h1 className="w-[20%] p-3 bg-gray-400/10"></h1>
      </div>
      <div className=" flex flex-col gap-5">
        <span className="w-[10%] p-3 bg-gray-400/10"></span>
        <h1 className="w-full h-96 p-3 bg-gray-400/10"></h1>
        <h1 className="w-full h-96 p-3 bg-gray-400/10"></h1>
      </div>
    </div>
  );
};

export default ChapterShimmer;
