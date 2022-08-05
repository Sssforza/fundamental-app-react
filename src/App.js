import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS 2', body: 'Description 2'},
    {id: 3, title: 'JS 3', body: 'Description 3'},
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Description"/>
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title={'List posts JS'}/>
    </div>
  );
}

export default App;
