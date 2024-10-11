import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
const movie = {
  title: "인생은 아름다워(2022)",
  url: "https://brunch.co.kr/@@aGZ8/70",
  image:
    "http://t1.daumcdn.net/brunch/service/user/aGZ8/image/DHcrL4aozwWZ3Jsdj8mYor2w54M.jpeg",
  authorName: "흐르는 강물처럼",
  authorUrl: "https://brunch.co.kr/@@aGZ8",
  authorImage:
    "http://t1.daumcdn.net/brunch/service/user/aGZ8/image/xc7bZBaFkPPJpNUYA2DkA7OfCY0.jpg",
  createTime: "2022-12-11 10:57:00",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
