import React, { useEffect, useState } from "react";
import { Card, CardVerseShowOnCard } from "../Components/Card";
import useFetch from "../hooks/useFetch.jsx";
import useOnlineStatus from "../hooks/useOnlineStatus.jsx";
import Offline from "../Components/Offline.jsx";
import Shimmer from "../layout/Shimmer.jsx";
const Home = () => {
  const { data, loading, error } = useFetch("chapters");
  const [GitaDataCopy, setGitaDataCopy] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const CardsShowTheSlok = CardVerseShowOnCard(Card);

  useEffect(() => {
    if (data.length > 0) {
      setGitaDataCopy(data);
    }
  }, [data]);

  const filterChapter = (e) => {
    const FilterData = data.filter((item) => {
      return (
        item.chapter_name?.toLowerCase().includes(SearchText.toLowerCase()) ||
        item?.translation.toLowerCase().includes(SearchText.toLowerCase())
      );
    });
    setGitaDataCopy(FilterData);
    setSearchText("");
  };

  if (onlineStatus === false) return <Offline />;
  return loading ? (
    <Shimmer />
  ) : (
    <div className="Home  px-5 md:px-10 flex flex-col bg-[#e5e7eb]  w-full h-full  ">
      <div className="input mt-5 flex gap-2 p-2 flex-col sm:flex-row ">
        <input
          className="border-2 border-gray-400/40 outline-none rounded-md p-2 text-sm w-full md:w-1/3 hover:border-orange-500 placeholder:text-gray-600 "
          type="text"
          placeholder="Enter The Chapter Name"
          name=""
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          id=""
        />
        <button
          className="cursor-pointer p-2 rounded-md   border border-orange-600/30 text-white   bg-orange-500/80 hover:bg-orange-500/90 item-center justify-center flex "
          onClick={() => filterChapter()}
        >
          Search
        </button>
      </div>
      <div className="CardContainer w-full flex flex-wrap gap-5 mt-5 justify-around ">
        {GitaDataCopy.map((item, index) => {
          const { verses_count } = item;
          return verses_count <= 40 ? (
            <CardsShowTheSlok key={item.chapter_number} item={item} />
          ) : (
            <Card key={item.chapter_number} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
