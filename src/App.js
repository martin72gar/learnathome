import React, { useState } from "react";
import "./styles.css";

const username = "instagram";

const Post = ({ src }) => <img src={src} alt="posts" />;

const Profile = (props) => {
  
  const {username} = props;
  const [isFollowed, setIsFollowed] = useState();
  const [inputAccount, setInputAccount] = useState("");
  const postCount = 11;
  const posts = [...Array(postCount)];

  return (
    <React.Fragment>
      <input
        onChange={({ target: { value } }) => {
          setInputAccount(value);
        }}
        placeholder="search profile"
      />
      <div>Search Result for account: {inputAccount}</div>
      <img src="https://via.placeholder.com/150" alt="profile picture" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      {postCount === 0 ? (
        <div>No Posts</div>
      ) : (
        <div className="posts">
          {posts.map((_, idx) => (
            <Post
              src="https://via.placeholder.com/300"
              key={idx}
              className="post"
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
}


export default function App() {
  const username = "martin";

  return <Profile username={username}/>;
}
