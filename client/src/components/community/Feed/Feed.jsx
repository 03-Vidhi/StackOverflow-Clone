import React from "react";
// import Share from '../Share/Share'
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../../dummyData";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
