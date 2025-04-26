import { useEffect, useState } from "react";
import { Chapters_API_URL, Verse_API_URL } from "./Utils/constants";
import Shimmer from "../layout/Shimmer";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router";
import ChapterShimmer from "../layout/ChapterShimmer";

const Chapter = () => {
  const ChapterName = useParams();
  const { data, loading, error } = useFetch(`chapter/${ChapterName.id}`);
  const [ChapterInfo, setChapterInfo] = useState(null);

  useEffect(() => {
    GetChapterInfo();
  }, []);

  const GetChapterInfo = async () => {
    const res = await fetch(Chapters_API_URL + ChapterName.id);
    const response = await res.json();
    console.log(response);
    setChapterInfo(response);
  };

  if (ChapterInfo === null) return <ChapterShimmer />;

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

  return (
  
    <div className=" mt-5 mb-10 px-2 md:px-10 w-full overflow-hidden flex flex-col">
      <div className="relative flex gap-8 w-full flex-col bg-white/80 shadow-sm shadow-gray-400/40 rounded-md p-2 sm:p-4 md:p-6">
        <div
          className="ChapterContainer gap-5 sm:gap-6 flex flex-col "
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
            <div className="flex gap-1  flex-col">
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
        flex-col gap-5 sm:gap-2 sm:absolute sm:w-96 sm:right-0 sm:top-0 sm:p-2 "
        >
          <h2 className="text-2xl sm:text-sm font-semibold  ">
            Verse Count : {verses_count}
          </h2>

          <div className="VerseCard flex flex-col gap-2  ">
            <span className="text-sm sm:text-xs text-gray-500">Slok :</span>
            <div className="flex gap-3 sm:gap-2 flex-wrap justify-start ">
              {VerseArray.map((item) => {
                return (
                  <Link
                    to={"/chapter/" + chapter_number + "/slok/" + item}
                    state={{  chapter_number, slok: item }}
                    key={item}
                  >
                    {" "}
                    <button
                      className="cursor-pointer w-10 sm:w-7 sm:h-7 p-2 sm:p-1 flex justify-center items-center  rounded-md  border border-orange-600/30 text-white   bg-orange-500/80 hover:bg-orange-500/90 item-center  text-sm "

                    >
                      {item}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Chapter;
