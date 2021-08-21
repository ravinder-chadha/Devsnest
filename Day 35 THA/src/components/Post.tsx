
import { useState } from 'react';
import { PostType } from '../App';

const Post = ({ post }: { post: PostType }) => {
  const [chats, setChat] = useState<any>([]);
    const [isLiked, setIsLiked] = useState(false);
    const [isMarked, setIsMarked] = useState(false);
    const [input, setInput] = useState<string>("");
    
    return (
      <div className="card post">
        <div className="card-header">
          <img src={post.profilePicture} alt="" />
          <h5 className="card-title">{post.username}</h5>
          <i className="bi bi-three-dots"></i>
        </div>
        <img src={post.post} className="card-img-top" alt="..." />
        <div className="buttons">
          <i
            className={isLiked ? "bi bi-heart-fill liked" : "bi bi-heart"}
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          ></i>
          <i className="bi bi-chat"></i>
          <i className="bi bi-share"></i>
          <i
            id="book"
            className={
              isMarked ? "bi bi-bookmark-fill" : "bi bi-bookmark"
            }
            onClick={() => {
              setIsMarked(!isMarked);
            }}
          ></i>
        </div>
        <div className="foot">
          <i className="bi bi-emoji-smile smile"></i>
          <input
            type="text"
            placeholder="Add a comment.."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className="add"
            onClick={() => {
              setChat([...chats,input]);
              setInput("");
            }}
          >
            Post
          </button>
        </div>
        <div className="comments">
          <ul>
            {chats.map((chat: string, index: number) => (
              <div className="comment">
                <li key={index}>
                  <p>{chat}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Post;
