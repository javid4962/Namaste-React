import React from "react";
import ReactDOM from "react-dom";

const h1 = React.createElement('h1',{title:"h1"},"Heading 1");

const h2 = React.createElement('h2',{title:"h2"},"Heading 2");

const div = React.createElement('div',{title:'divElement'},[h1,h2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('hello');

root.render(div);