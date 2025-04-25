import { useEffect, useState } from "react";
import { Chapters_API_URL, Verse_API_URL } from "./Utils/constants";
import Shimmer from "../layout/shimmer";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";

const Chapter = () => {
  const ChapterName = useParams();
  const { data, loading, error } = useFetch(`chapter/${ChapterName.id}`);
  const [ChapterInfo, setChapterInfo] = useState(null);
  const [VerseInfo, setVerseInfo] = useState(null);
  console.log(data);

  useEffect(() => {
    GetChapterInfo();
  }, []);

  const GetChapterInfo = async () => {
    const res = await fetch(Chapters_API_URL + ChapterName.id);
    const response = await res.json();
    console.log(response);
    setChapterInfo(response);
  };

  const GetVerseInfo = async (verseValue) => {
    fetch("chapter/" + ChapterName.id + "/" + verseValue);
    const res = await fetch(
      Verse_API_URL + "/" + ChapterName.id + "/" + verseValue
    );
    const response = await res.json();
    setVerseInfo(response);
  };

  if (ChapterInfo === null) return <Shimmer />;

  const {
    chapter_number,
    meaning,
    name,
    summary,
    translation,
    transliteration,
    verses_count,
  } = ChapterInfo;

  let VerseArray = [];
  for (let i = 0; i < verses_count; i++) {
    VerseArray.push(i + 1);
  }

  console.log(VerseInfo);

  return (
    <div className=" mt-5 mb-10 px-2 md:px-10 w-full overflow-hidden flex flex-col">
      <div className="flex gap-8 w-full flex-col bg-white/80 shadow-sm shadow-gray-400/40 rounded-md p-2 sm:p-4 md:p-6">
        <div
          className="ChapterContainer gap-5 flex flex-col "
          id={chapter_number}
        >
          <div className="flex gap-2  flex-col">
            <h1 className="Title flex text-2xl font-semibold  ">
              Chapter {chapter_number}
            </h1>
            <h2 className="ChapterName text-xl font-semibold ">{name}</h2>
          </div>
          <div className="flex gap-2 flex-col">
            <p className="text-sm  text-gray-500">Translation :</p>
            <div className="flex gap-1  flex-col" >
              <h2 className="ChapterNameTranslation   text-md ">
                {translation}
              </h2>
              <h2 className="ChapterNameTranslation   text-md ">
                {transliteration}
              </h2>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            {" "}
            <p className="text-sm  text-gray-500">Meaning :</p>
            <div className="flex gap-1  flex-col">
              <p className="ChapterMeaning   text-md ">{meaning.en}</p>
              <p className="ChapterMeaning   text-md ">{meaning.hi}</p>
            </div>
          </div>{" "}
          <div className="flex gap-2 flex-col">
            {" "}
            <p className="text-sm  text-gray-500">Summary :</p>
            <div className="flex gap-4  flex-col">
              <p className="ChapterSummary   text-md  text-justify ">
                {summary.en}
              </p>
              <p className="ChapterSummary   text-md text-justify ">
                {summary.hi}
              </p>
            </div>
          </div>{" "}
        </div>
        <div
          className="ChapterVerseContainer  flex
        flex-col gap-5"
        >
          <h2 className="text-2xl font-semibold  ">
            Verse Count : {verses_count}
          </h2>

          <div className="VerseCard flex flex-col gap-2">
            <span className="text-sm  text-gray-500">Slok :</span>
            <div className="flex gap-3 flex-wrap justify-around ">
              {VerseArray.map((item) => {
                return (
                  <button
                    className="cursor-pointer w-10 p-2 rounded-md  border border-orange-600/30 text-white   bg-orange-500/80 hover:bg-orange-500/90 item-center justify-center flex text-sm "
                    onClick={() => GetVerseInfo(item)}
                    key={item}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {VerseInfo && (
        <div className="mt-5 flex gap-8 w-full flex-col bg-white/80 shadow-sm shadow-gray-400/40 rounded-md p-2 sm:p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-4  ">
            Slok No : {VerseInfo.verse}
          </h2>
          <h1 className="  text-md">
            <span className="text-sm text-justify text-gray-500">Slok : </span>
            {VerseInfo.slok || " "}
          </h1>
          <p className="  text-md">
            <span className="text-sm  text-gray-500">Author : </span>
            {VerseInfo.sankar.author || " "}
          </p>
          <div className="flex gap-4 flex-col">
            <p className="  text-md text-justify">
              {VerseInfo.sankar.et || " "}
            </p>
            <p className="  text-md text-justify">
              {VerseInfo.sankar.ht || " "}
            </p>
            <p className="  text-md text-justify">
              {VerseInfo.sankar.sc || " "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chapter;
