import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Children from "./Components/Children";

// const Parent = React.createElement('h1', { id: "header", className: "header" },
//      [React.createElement('div', 
//         { id: "Child1", className: "Child1" },
//         [React.createElement('h1', 
//             { id: "h1", className: "h1" },
//              "hello world with SSSSSSssssSReact Js!"),React.createElement('h2', 
//                 { id: "h2", className: "h2" },
//                  "hello world with React Js!")]), 
//                  React.createElement('div', 
//                     { id: "Child2", className: "Child2" },
//                     [React.createElement('h1', 
//                         { id: "h1", className: "h1" },
//                          "hello world with React Js!"),React.createElement('h2', 
//                             { id: "h2", className: "h2" },
//                              "hello world with React Js!")])
//             ],)

// const JsxParent = (<>
//    <h1>Hi iam from jsx code</h1>
//    <h1>Hi iam from jsx code</h1>
//    <h1>Hi iam from jsx code</h1>
//    <h1>Hi iam from jsx code</h1>
// </>
// )
// console.log(JsxParent);


// react Component


// to insert the 1 component in 2 component that is *Component Composition*
const Header = () => {
const [FetchData, setFetchData] = useState([])
useEffect(() => {
   fetchData()
})
const fetchData = async () => {
   const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
   const options = {
      method: 'GET',
      // headers: {
      //    'x-rapidapi-key': 'd06ebdb468mshef47bbba86ace9bp1ed8d5jsn574356246200',
      //    'x-rapidapi-host': 'wine-pair.p.rapidapi.com'
      // }
   };
   
   try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
   } catch (error) {
      console.error(error);
   }
}

   return (
      <div className="Container">

<Children />
         
         <Children />

      </div>
   )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />)