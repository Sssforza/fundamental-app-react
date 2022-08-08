import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
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

  const [post, setPost] = useState ({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Title"
        />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Description"
        />
        <MyButton onClick={addNewPost} >Create post</MyButton>
      </form>
      <PostList posts={posts} title={'List posts JS'}/>
    </div>
  );
}

export default App;
