import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Chapters_API_URL, Verse_API_URL } from "./Utils/constants";
import Shimmer from "../layout/shimmer";

const Chapter = () => {
    const [ChapterInfo, setChapterInfo] = useState(null);
    const [VerseValue, setVerseValue] = useState("")
    const [VerseInfo, setVerseInfo] = useState(null);
    const ChapterName = useParams();

    useEffect(() => {
        GetChapterInfo();
    }, []);


    useEffect(() => {
        console.log("hii iam verse");
        console.log(VerseValue);
        GetVerseInfo()
    }, [VerseValue])

    const GetChapterInfo = async () => {
        const res = await fetch(Chapters_API_URL + ChapterName.id);
        const response = await res.json();
        console.log(response);
        setChapterInfo(response);
    };

    const GetVerseInfo = async () => {
        const res = await fetch(Verse_API_URL + '/' + ChapterName.id + '/' + VerseValue);
        const response = await res.json();
        setVerseInfo(response);
    }

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

    let VerseArray = []
    for (let i = 0; i < verses_count; i++) {
        VerseArray.push(i + 1)
    }

    // console.log(VerseInfo.slok);
    console.log(VerseInfo);


    return (
        <div className="Chapter" >
            <div className="ChapterMainContainer">
                <div className="ChapterContainer" id={chapter_number}>
                    <h1 className="Title">Chapter {chapter_number}</h1>
                    <div>
                        <h2 className="ChapterName">{name}</h2>
                    </div>
                    <div>
                        <p>Translation</p>
                        <h2 className="ChapterNameTranslation">{translation}</h2>
                        <h2 className="ChapterNameTranslation">{transliteration}</h2>
                    </div>
                    <div>
                        {" "}
                        <p>Meaning :</p>
                        <p className="ChapterMeaning">{meaning.en}</p>

                        <p className="ChapterMeaning">{meaning.hi}</p>
                    </div>{" "}
                    <div>
                        {" "}
                        <p>Summary :</p>   <br />
                        <p className="ChapterSummary">{summary.en}</p>
                        <br />
                        <p className="ChapterSummary">{summary.hi}</p>
                    </div>{" "}
                </div>
                <div className="ChapterVerseContainer">
                    <h2>Verse Count : {verses_count}</h2>

                    <div className="VerseCard">
                        {
                            VerseArray.map((item) => {
                                return <button onClick={() => {
                                    console.log(item);
                                    setVerseValue(item || 1)
                                }} key={item}>{item}</button>
                            })
                        }
                    </div>
                </div>
            </div>
            {VerseInfo && <div className="VerseInfoContainer">
                <h1><span>Slok :</span>{VerseInfo.slok || " "}</h1>
                <p><span>Author :</span>{VerseInfo.sankar.author || " "}</p>
                <p>{VerseInfo.sankar.et || " "}</p>
                <p>{VerseInfo.sankar.ht || " "}</p>
                <p>{VerseInfo.sankar.sc || " "}</p>


            </div>}
        </div>
    );
};

export default Chapter;
