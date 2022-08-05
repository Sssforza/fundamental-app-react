import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS 2', body: 'Description 2'},
    {id: 3, title: 'JS 3', body: 'Description 3'},
  ])
  const [posts2, setPosts2] = useState([
    {id: 1, title: 'PT', body: 'Description'},
    {id: 2, title: 'PT 2', body: 'Description 2'},
    {id: 3, title: 'PT 3', body: 'Description 3'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title={'List posts JS'}/>
      <PostList posts={posts2} title={'List posts PT'}/>
    </div>
  );
}

export default App;
