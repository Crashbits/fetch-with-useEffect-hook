import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
}

function App() {
  return (
    <div className="App">
      Read the instructions.
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
