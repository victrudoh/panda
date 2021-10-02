import React from "react";
import Card from "./Card";

const CardList = ({ newsData }) => {
    console.log("News: ", newsData);

    const newsArray = newsData.map((user, idx) => {
        return (
          <Card
            key={idx}
            image={newsData[idx].urlToImage}
            title={newsData[idx].title}
            desc={newsData[idx].description}
            author={newsData[idx].author}
            url={newsData[idx].url}
          />
        );
    })
  return (
      <div>
          {newsArray}
      </div>
  )
}

export default CardList;
