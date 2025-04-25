import { Link } from "react-router";

export const Card = ({ item }) => {
  const { chapter_number, meaning, name, summary } = item;
  return (
    <div className="flex flex-col item-start gap-4  w-96  bg-white p-5 rounded-md   " id={chapter_number}>
      <h1 className="text-xl font-semibold ">Chapter {chapter_number}</h1>
      <div className="flex gap-2 items-center">
        <span className="text-sm text-gray-500 ">Name :</span>
        <h1 className="Title text-md font-semibold "> {name}</h1>
      </div>
      <div className="flex gap-2  flex-col">
        <span className="text-sm  text-gray-500">Meaning :</span>
     
        <p className="Discription text-md">{meaning.en}</p>
        <p className="Discription text-md">{meaning.hi}</p>

      </div>

      <Link className=" cursor-pointer px-2 py-1 rounded-md  border border-orange-600/30 text-white   bg-orange-500/80 hover:bg-orange-500/90  item-center justify-center flex " to={"/chapter/" + chapter_number}>Read More </Link>
    </div>
  );
};

// High Order Componenet
export const CardVerseShowOnCard = (Card)=>{
  return ({ item })=>{
    const { chapter_number, meaning, name, summary,verses_count } = item;
    return(
      <div className="flex flex-col item-start gap-4  w-96  bg-white p-5 rounded-md relative  " id={chapter_number}>
        <label className="absolute right-2 top-2 bg-gray-300/50 p-2 rounded-md text-xs ">Slock {verses_count}</label>
      <h1 className="text-xl font-semibold ">Chapter {chapter_number}</h1>
      <div className="flex gap-2 items-center">
        <span className="text-sm text-gray-500 ">Name :</span>
        <h1 className="Title text-md font-semibold "> {name}</h1>
      </div>
      <div className="flex gap-2  flex-col">
        <span className="text-sm  text-gray-500">Meaning :</span>
     
        <p className="Discription text-md">{meaning.en}</p>
        <p className="Discription text-md">{meaning.hi}</p>

      </div>responsive

      <Link className=" cursor-pointer px-2 py-1 rounded-md  border border-orange-600/30 text-white   bg-orange-500/80 hover:bg-orange-500/90  item-center justify-center flex " to={"/chapter/" + chapter_number}>Read More </Link>
    </div>
    )
  }
}