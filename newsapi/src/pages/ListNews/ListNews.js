import Card from "./Card/Card";
import React, { Component } from "react";
import "./ListNews.scss";
import axios from "axios";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      title: "",
      author: "",
      content: "",
      urlToImage: "",
      
      articles: [],
    };
  }

  componentDidMount() {
    axios.get("https://newsapi.org/v2/everything?domains=wsj.com&pageSize=5&apiKey=5d418527cbf84953abd197fe5f0f246c")
      .then((res) => {
        const{articles} = res.data;
        this.setState({articles:[...this.state.articles, ...articles]});
      });
  }

  paintCards = () => {
      return this.state.articles.map((article, index) => <Card article={article} key={index} />)
  };

  render() {
    return <div className="list">
      {this.state.articles.length > 0 ? this.paintCards():<></>}
      </div>;
  }
}
export default ListNews;