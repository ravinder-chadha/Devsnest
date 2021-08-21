import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PostType } from '../App';
import Post from './Post';

const Landing = ({posts}: {posts: PostType[]}) => {
    const user = useSelector((state: any) => state.user);

    const story = useRef<any>(null);
    useEffect(() => {
        story.current.scrollBy({
            top: 0,
            left: 1000,
            behavior: "smooth",
        })
    }, []);
    
    return (
      <div className="container landing">
        <div className="row">
          <div className="col-8">
            <div className="card story" ref= {story}>
              {[...Array(15)].map((_, i) => (
                <div className="story-img">
                  <img src={user.profilePicture} alt="" />
                </div>
              ))}
            </div>
            <div className="posts">
                {posts.length > 0 ? posts.map((post) => (
                    <Post post={post} />
                )): null}
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
}

export default Landing
