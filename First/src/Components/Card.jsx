import GitaImg from "../assets/gita.jpg";
export const Card = ({item}) => {
    console.log(item);
    const { chapter_number, meaning, name, summary } = item;
    return (
        <div className="card" id={chapter_number}>
            <h1 >
               Chapter {chapter_number}
            </h1>
           Name:
           
            <h1 className="Title">  {name}</h1>
            <span>Meaning :</span>
            <p className="Discription">{meaning.en}</p>
            <p className="Discription">{meaning.hi}</p>
            <span>Description :</span>
            <p className="Discription">{summary.en}</p>
            <p className="Discription">{summary.hi}</p>
        </div>

    )

}