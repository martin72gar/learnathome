import React, { useState } from "react";
import "./styles.css";

const username = "instagram";

const Post = (props) => (
  <React.Fragment>
    <img src="https://via.placeholder.com/300" alt="postings"/>
  </React.Fragment>
);

const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState();

  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/150" alt="profile picture" />
      <div>@{props.username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      <Post />
    </React.Fragment>
  );
}


export default function App() {
  const username = "martin";

  return <Profile username={username}/>;
}
