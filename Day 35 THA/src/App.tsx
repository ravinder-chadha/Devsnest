
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import NavbarFunction from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { User, updateUser } from "./actions";
import React, { useEffect } from 'react';
import Landing from './components/Landing';
import { useState } from 'react';


export interface PostType{
  username: string,
  post: string,
  profilePicture: any,
}

function App() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    dispatch(updateUser);
    fetch("/data/post.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="App">
      <NavbarFunction />
      <Landing posts={posts}/>
    </div>
  );
};

export default App;
