import React from "react";

const Books = () => {
  return (
    <div className="px-5 md:px-10 mt-5 flex justify-center flex-col">
      {" "}
      This page has many books. Since this page is also larger than 10MB, use
      lazy and Suspense in React JS to optimize the app.
    </div>
  );
};

export default Books;
