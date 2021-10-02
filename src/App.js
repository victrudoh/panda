import "./App.css";
import { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import Scroll from "./scroll";
// import logo from "./images/logo.png";
import title from "./images/title.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d99fefcf44854feeb378352568d6119d"
    )
      .then((response) => response.json())
      .then((stories) => {
        this.setState({
          news: stories.articles,
        });
      });
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const filteredNews = this.state.news.filter((story) => {
      return story.title.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })

    return (
      <div className="tc">
        <h1 className="f1">
          <img src={title} className="title" alt="logo" />
        </h1>
        <p className="titleText">please don't sue us, Danny made us do it</p>
        <SearchBox searchNews={this.onSearchChange} />
        <CardList newsData={filteredNews} />
      </div>
    );
  }
}

export default App;
