import React from "react";

const Card = (props) => {
  console.log(props);
  
  return (
    <div className="card">
      <div className="top">
        <div className="coverimg">
          <img
            src={props.coverimg}
            alt=""
          />
          <button>{props.isfollowed?"Followed":"Follow +"}</button>
        </div>
        <div className="profileimg">
          <img
            src={props.profile}
            alt=""
          />
        </div>
      </div>
      <div className="mid">
        <h2>{props.fullname}</h2>
        <p>{props.bio}</p>
      </div>
      <div className="info">
        <div className="num">
          <h2 className="nooflikes">{props.likes}</h2>
          <h2 className="noofposts">{props.posts}</h2>
          <h2 className="noofviews">{props.views}</h2>
        </div>
        <div className="data">
          <p>Likes</p>
          <p>Posts</p>
          <p>Views</p>
        </div>
      </div>
      <div className="bottom">
        <i class="ri-instagram-line"></i>
        <i class="ri-twitter-x-line"></i>
        <i class="ri-threads-line"></i>
      </div>
    </div>
  );
};

export default Card;
