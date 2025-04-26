import React, { useEffect, useState } from "react";
import { Verse_API_URL } from "../Components/Utils/constants";
import { useLocation } from "react-router";
import ShowTheSlokWithAuthor from "../Components/Slok/ShowTheAuthorName";
import SlokShimmer from "../layout/SlokShimmer";

const Slok = () => {
  const SlokData = useLocation();
  const [VerseInfo, setVerseInfo] = useState({});
  const [VerseArr, setVerseArr] = useState([]);
  const [ShowIndex, setShowIndex] = useState(null);
  useEffect(() => {
    if (SlokData.state) {
      const { chapter_number, slok } = SlokData.state;
      GetVerseInfo(chapter_number, slok);
    }
  }, [SlokData.state]);

  const GetVerseInfo = async (chapter_number, slok) => {
    const res = await fetch(Verse_API_URL + "/" + chapter_number + "/" + slok);
    const response = await res.json();

    setVerseInfo(response);
  };

  useEffect(() => {
    if (Object.keys(VerseInfo).length > 0) {
      const VerseInfoArr = Object.values(VerseInfo);
      const authors = VerseInfoArr.filter((item) => item?.author);

      setVerseArr(authors);
    }
  }, [VerseInfo]);

  if (SlokData.state === null) {
    return <div>Loading...</div>;
  }

  console.log(VerseArr);
  if (!VerseInfo || Object.keys(VerseInfo).length === 0) {
    return <SlokShimmer />;
  }
  return (
    <div className="mt-5 flex flex-col bg-white/80 lg:w-1/2 mx-auto shadow-sm shadow-gray-400/40 rounded-md p-2 sm:p-4 md:p-6">
      <div className="flex gap-2 flex-col">
        <h2 className="text-2xl font-semibold mb-4">
          Slok No : {VerseInfo.verse}
        </h2>
        <h1 className="text-md">
          <span className="text-sm text-justify text-gray-500">Slok : </span>
          {VerseInfo.slok || " "}
        </h1>
      </div>
      <h2 className="text-md text-justify text-gray-500 mt-6">Bhashya : </h2>
      {VerseArr.map((items, index) => {
        return (
          <ShowTheSlokWithAuthor
            key={index}
            VerseInfo={items}
            openMenu={index === ShowIndex && true}
            setShowIndex={() => {
              if (ShowIndex === index) {
                setShowIndex(null);
              } else {
                setShowIndex(index);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Slok;
