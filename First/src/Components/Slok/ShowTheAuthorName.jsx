import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import ShowAuthorBhashya from "./ShowAuthorBhashya";

const ShowTheSlokWithAuthor = ({ VerseInfo, openMenu, setShowIndex }) => {
  console.log(VerseInfo);

  return (
    <div>
      <div className="flex gap-2 mt-8 flex-col">
        <div
          onClick={setShowIndex}
          className="flex gap-2 cursor-pointer border-2 border-gray-400/40 rounded-md p-2 text-sm w-full hover:border-orange-500"
        >
          <h1 className="text-md font-semibold flex justify-between w-full">
            {VerseInfo.author}
          </h1>
          <MdArrowDropDown className="text-xl" />
        </div>
        {openMenu && <ShowAuthorBhashya VerseInfoData={VerseInfo} />}
      </div>
    </div>
  );
};

export default ShowTheSlokWithAuthor;
