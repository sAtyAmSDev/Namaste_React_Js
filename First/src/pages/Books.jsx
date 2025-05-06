import React, { useEffect, useState } from "react";
import { Books_API_URL } from "../Components/Utils/constants";
import { BooksData } from "../Components/Utils/BooksData";
import { BookCard, RecommendedBookCard } from "../Components/BookCard";

const Books = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    setBookData(BooksData);

    // GetBooksData();
  }, []);

  const GetBooksData = async () => {
    const endPoint = `index?contentType=6&limit=${10}&offset=0`;
    const response = await fetch(Books_API_URL + endPoint);
    const jsonData = await response.json();
    setBookData(jsonData?.contents?.data);
  };
  console.log(bookData);

  return (
    <div className="px-5 md:px-10 mt-5 flex justify-center flex-col">
      {" "}
      <h1 className="text-xl font-seminbold">Books ({bookData.length})</h1>
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {bookData.map((items, index) => (
          <BookCard key={index} booksData={items} />
        ))}
      </div>
    </div>
  );
};

export default Books;
