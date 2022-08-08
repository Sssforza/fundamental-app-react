import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css';
 
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS 2', body: 'Description 2'},
    {id: 3, title: 'JS 3', body: 'Description 3'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length != 0
        ? <PostList remove={removePost} posts={posts} title={'List posts JS'}/>
        : <h1 style={{textAlign: 'center'}}>Not posts</h1>
      }
    </div>
  );
}

export default App;
