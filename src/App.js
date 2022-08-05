import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.css';

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState("Текст в инпуте");

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JS', body: 'Description'}}/>
    </div>
  );
}

export default App;
