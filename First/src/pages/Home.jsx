import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import Shimmer from "../layout/shimmer";
import {API_URL} from "../Components/Utils/constants"
const Home = () => {
  const [GitaData, setGitaData] = useState([]);
  const [GitaDataCopy, setGitaDataCopy] = useState([]);
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("hello world useEffect");
    getGitaData();
  }, []);


  const getGitaData = async () => {
    const res = await fetch(API_URL);
    const response = await res.json();
    console.log(response);
    setGitaData(response);
    setGitaDataCopy(response);
  };

  const FilterChapter = (e) => {
    const FilterData = GitaData.filter((item) => {
      return item.chapter_number.toString().includes(SearchText);
    });
    setGitaDataCopy(FilterData);
    setSearchText("");
    console.log(FilterData);
  };
  return ((GitaData.length === 0) ? (
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
        <button onClick={() => FilterChapter()}>SearchText</button>
      </div>
      <div className="CardContainer">
        {GitaDataCopy.map((item, index) => {
          return <Card key={item.chapter_number} item={item} />;
        })}
      </div>
    </div>
  ));
};

export default Home;
