import { Link } from "react-router";

export const Card = ({ item }) => {
    console.log(item);
    const { chapter_number, meaning, name, summary } = item;
    return (
        <div className="card" id={chapter_number}>
            <h1 >
                Chapter {chapter_number}
            </h1>
            <span>Name :</span>
            <h1 className="Title">  {name}</h1>
            <span>Meaning :</span>
            <p className="Discription">{meaning.en}</p>
            <p className="Discription">{meaning.hi}</p>

            <Link to={"/chapter/" + chapter_number}>Read More </Link>

        </div>

    )

}