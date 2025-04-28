import React, { useContext, useEffect, useState } from "react";
import { Card, CardVerseShowOnCard } from "../Components/Card";
import useFetch from "../hooks/useFetch.jsx";
import useOnlineStatus from "../hooks/useOnlineStatus.jsx";
import Offline from "../Components/Offline.jsx";
import Shimmer from "../layout/Shimmer.jsx";
import UserContext from "../Components/Utils/UserContext.jsx";
const Home = () => {
  const { data, loading, error } = useFetch("chapters");
  const [GitaDataCopy, setGitaDataCopy] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const { logInUser, setUserName } = useContext(UserContext);

  const CardsShowTheChapter = CardVerseShowOnCard(Card);

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
    <div className="Home  px-5 md:px-10 flex   flex-col bg-[#f5f4f5]  w-full  lg:mx-auto lg:w-[1280px] h-full  ">
      <div className="flex flex-col gap-2 mt-5 w-full  ">
        <div className="input mt-5 flex gap-2 p-2 w flex-col sm:flex-row ">
          <input
            className="border-2 border-gray-400/40 bg-white outline-none rounded-md p-2 text-sm w-full md:w-1/3 hover:border-orange-500 placeholder:text-gray-600 "
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
        <div className="flex gap-2 flex-row items-center ">
          <span className="text-sm text-gray-500">
          User :
          </span>
          <input
            className="border-2 border-gray-400/40 bg-white outline-none rounded-md p-2 text-sm w- hover:border-orange-500 placeholder:text-gray-600 "
            type="text"
            placeholder="Enter The Chapter Name"
            name=""
            value={logInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            id=""
          />
        </div>
      </div>
      <div className="CardContainer flex flex-wrap gap-5 mt-5 w-full justify-around ">
        {GitaDataCopy.map((item, index) => {
          const { verses_count } = item;
          return verses_count <= 40 ? (
            <CardsShowTheChapter key={item.chapter_number} item={item} />
          ) : (
            <Card key={item.chapter_number} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
