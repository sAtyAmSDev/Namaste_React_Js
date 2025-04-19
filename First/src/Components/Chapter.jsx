import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Chapters_API_URL } from "./Utils/constants";
import Shimmer from "../layout/shimmer";

const Chapter = () => {
    const [ChapterInfo, setChapterInfo] = useState(null);
    const [VerseValue, setVerseValue] = useState("")
    const ChapterName = useParams();
    useEffect(() => {
        GetChapterInfo();
    }, []);
useEffect(() => {
console.log("hii iam verse");
console.log(VerseValue);

}, [VerseValue])

    const GetChapterInfo = async () => {
        const res = await fetch(Chapters_API_URL + ChapterName.id);
        const response = await res.json();
        console.log(response);
        setChapterInfo(response);
    };
    if (ChapterInfo === null) return <Shimmer />;

    console.log(ChapterInfo);
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
    return (
        <div >
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
            <div>
                <p>Title</p>

            </div>
        </div>
    );
};

export default Chapter;
