import React, { useEffect, useState } from "react";

const ShowAuthorBhashya = ({ VerseInfoData }) => {
  console.log(VerseInfoData);

  return (
    <div className="flex gap-4 flex-col">
      {VerseInfoData.ht && (
        <div className="flex w-full flex-col">
          <span className=" text-xs text-gray-400/50 ">Hindi Translation</span>
          <p className="  text-md text-justify ">
            {VerseInfoData.ht || " N/A "}
          </p>
        </div>
      )}

      {VerseInfoData.et && (
        <div className="flex w-full flex-col">
          <span className=" text-xs text-gray-400/50 ">
            English Translation
          </span>
          <p className="  text-md text-justify ">
            {VerseInfoData.et || " N/A  "}
          </p>
        </div>
      )}

      {VerseInfoData.st && (
        <div className="flex w-full flex-col">
          <span className=" text-xs text-gray-400/50 ">
            Sanskrit Translation
          </span>
          <p className="  text-md text-justify ">
            {VerseInfoData.st || " N/A  "}
          </p>
        </div>
      )}

      {VerseInfoData.hc && (
        <div className="flex w-full flex-col">
          <span className=" text-xs text-gray-400/50 ">Hindi Content</span>
          <p className="  text-md text-justify ">
            {VerseInfoData.hc || " N/A  "}
          </p>
        </div>
      )}

      {VerseInfoData.ec && (
        <div className="flex w-full flex-col">
          <span className=" text-xs text-gray-400 ">
            English Content
          </span>
          <p className="  text-md text-justify ">
            {VerseInfoData.ec || " N/A  "}
          </p>
        </div>
      )}
      {VerseInfoData.sc && (
        <div className="flex w-full flex-col">
          <span className=" text-xs text-gray-400/50 ">
            Sanskrit Content
          </span>
          <p className="  text-md text-justify ">
            {VerseInfoData.sc || " N/A  "}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowAuthorBhashya;
