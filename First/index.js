import React, { Component } from "react";
import ReactDOM from "react-dom/client";

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

const Children = () => {
   return (
      <h1>Iam a Title</h1>
   )
}
// to insert the 1 component in 2 component that is *Component Composition*
const Header = () => {
   return (
      <div className="Container">
         <Children />
         <h1>Iam a Function based Component</h1>
      </div>
   )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />)