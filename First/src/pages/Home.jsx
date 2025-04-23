import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import Shimmer from "../layout/shimmer";
import { API_URL } from "../Components/Utils/constants";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const { data, loading, error } = useFetch("chapters");
  const [GitaDataCopy, setGitaDataCopy] = useState([]);
  const [SearchText, setSearchText] = useState("");

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

  return loading ? (
    <Shimmer />
  ) : (
    <div className="Home">
      <div className="input">
        <input
          type="text"
          name=""
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          id=""
        />
        <button onClick={() => filterChapter()}>Search</button>
      </div>
      <div className="CardContainer">
        {GitaDataCopy.map((item, index) => {
          return <Card key={item.chapter_number} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
