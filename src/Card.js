import React from "react";

const Card = ({ image, url, title, desc, author }) => {
  return (
    <div className="tc bg-washed-green dib br3 pa3 ma4 bw2 shadow-S w-90">
      <h1>{title}</h1>
      <img src={image} alt="News" />
      <h3>{desc}</h3>
      <p>{author}</p>
      <a href={url} className="btn br-pill">See full story</a>
    </div>
  );
};

export default Card;
