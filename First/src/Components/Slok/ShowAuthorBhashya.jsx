import React, { useEffect, useState } from "react";

const ShowAuthorBhashya = ({ VerseInfoData }) => {
  console.log(VerseInfoData);

  return (
    <div className="flex gap-4 flex-col">
      {VerseInfoData.ht && (
        <div className="flex w-full flex-col gap-2 ">
          <span className=" text-sm text-black/90 font-semibold underline ">Hindi Translation</span>
          <p className="  text-sm text-gray-900/70 ">
            {VerseInfoData.ht || " N/A "}
          </p>
        </div>
      )}

      {VerseInfoData.et && (
        <div className="flex w-full flex-col gap-2 ">
          <span className=" text-sm text-black/90 font-semibold underline ">
            English Translation
          </span>
          <p className="  text-sm text-gray-900/70 ">
            {VerseInfoData.et || " N/A  "}
          </p>
        </div>
      )}

      {VerseInfoData.st && (
        <div className="flex w-full flex-col gap-2 ">
          <span className=" text-sm text-black/90 font-semibold underline ">
            Sanskrit Translation
          </span>
          <p className="  text-sm text-gray-900/70 ">
            {VerseInfoData.st || " N/A  "}
          </p>
        </div>
      )}

      {VerseInfoData.hc && (
        <div className="flex w-full flex-col gap-2 ">
          <span className=" text-sm text-black/90 font-semibold underline ">Hindi Content</span>
          <p className="  text-sm text-gray-900/70 ">
            {VerseInfoData.hc || " N/A  "}
          </p>
        </div>
      )}

      {VerseInfoData.ec && (
        <div className="flex w-full flex-col gap-2 ">
          <span className=" text-sm text-black/90 font-semibold underline ">
            English Content
          </span>
          <p className="  text-sm text-gray-900/70 ">
            {VerseInfoData.ec || " N/A  "}
          </p>
        </div>
      )}
      {VerseInfoData.sc && (
        <div className="flex w-full flex-col gap-2 ">
          <span className=" text-sm text-black/90 font-semibold underline ">
            Sanskrit Content
          </span>
          <p className="  text-sm text-gray-900/70 ">
            {VerseInfoData.sc || " N/A  "}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowAuthorBhashya;
