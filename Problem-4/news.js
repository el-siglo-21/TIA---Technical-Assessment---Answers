import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const welcome = <h3>News<span>Streets</span></h3>;

const menus = [{head:"News", className:"current", linkto:"./index.html"},
 			   {head:"Contact Us", linkto:"./contact.html"}
 			  ];

const listItems = menus.map((x) =>
  <li className={x.className}><a href={x.linkto}>{x.head}</a></li>
);

const contentTitle = <h1>Latest News</h1>;

const footer = <h4>Copyright 2016 @ Engineering Team</h4>;

ReactDOM.render(
  <ul id="nav">{listItems}</ul>,
  document.getElementById('menubar')
);

ReactDOM.render(
  welcome,
  document.getElementById('welcome_slogan')
);


ReactDOM.render(
  contentTitle,
  document.getElementById('content_title')
);

ReactDOM.render(
  footer,
  document.getElementById('footnote')
);