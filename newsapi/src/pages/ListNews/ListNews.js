import React, { Component } from 'react';
import axios from 'axios';
import './ListNews.scss';
import Card from './Card'
//const apiKey = process.env.REACT_APP_API_KEY;

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount = async () => {
    const res = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&pageSize=5&apiKey=5d418527cbf84953abd197fe5f0f246c");
    const articles = res.data.articles;
    this.setState({ articles });
    
    console.log(res.data.articles);
  };

  paintCards = () => this.state.articles.map((articles, index) => <Card articles={articles} key={index}/>)


  render = () => {
    return<div>
      <p><Card/></p>
      </div>;
  }
}

export default ListNews;