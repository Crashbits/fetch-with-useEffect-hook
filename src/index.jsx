import React, {useState, useEffect, Fragment} from "react";
import ReactDOM from "react-dom";
import "./styles.css";


function useFetch (url) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  
  useEffect(()=> {
    setLoading(true)
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setError(null)
      setLoading(false)
    })
    .catch((e) => {
      console.warn(e.message)
      setError('Error Fetching Data.')
      setLoading(false)
    })
  },[url])
  return {
    loading,
    data,
    error
  }
}

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]
function App() {
  const [index, setIndex] = useState(0) 
  
  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
    )

  const incrementIndex = () => {
    setIndex((i) => 
    i === postIds.length - 1 
    ? i 
    : i + 1
    )
  }

  if (loading === true){
    return <p>Loading...</p>
  }

  if(error){
    return (
      <React.Fragment>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </React.Fragment>
    )
  }

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {index === postIds.length - 1 
      ? <p>No more post!</p> 
      : <button onClick={incrementIndex}>Next</button>
      }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
