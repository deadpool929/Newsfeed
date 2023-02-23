import React, { Component } from "react";
import Loading from "./Loading";
import Newsfeed from "./Newsfeed";

export default class News extends Component {
  art = [];

  constructor(props) {
    super(props);
    this.state = {
      article: this.art,
      page: 1,
      categories: "",
      totalNews: "",
      loading: false,
    };
  }
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cc3446aeaad247aa880133d314c44bdc&page=1&pageSize=${this.props.limit}`;
    let data = await fetch(url);
    let parseFetch = await data.json();

    this.setState({
      article: parseFetch.articles,
      totalNews: parseFetch.totalResults,

      loading: false,
    });
  }

  nextPage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalNews / 20)) {
    } else {
      this.setState({
        loading: true,
      });
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=cc3446aeaad247aa880133d314c44bdc&page=${
        this.state.page + 1
      }&pageSize=${this.props.limit}`;
      let data = await fetch(url);
      let parseFetch = await data.json();

      this.setState({
        page: this.state.page + 1,
        article: parseFetch.articles,

        loading: false,
      });
    }
  };

  prevPage = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=cc3446aeaad247aa880133d314c44bdc&page=${
      this.state.page - 1
    }&pageSize=${this.props.limit}`;
    let data = await fetch(url);
    let parseFetch = await data.json();

    this.setState({
      page: this.state.page - 1,
      article: parseFetch.articles,

      loading: false,
    });
  };

  // getEntertainment = async () => {
  //   this.setState({
  //     categories: "entertainment",
  //   });
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     this.state.categories
  //   }&apiKey=cc3446aeaad247aa880133d314c44bdc&page=${this.state.page - 1}`;
  //   let data = await fetch(url);
  //   let parseFetch = await data.json();
  //   this.setState({
  //     article: parseFetch.articles,
  //   });
  // };

  render() {
    return (
      <div className="container my-3">
        <div className="text-center" style={{ marginBottom: "2%" }}>
          <h1>NewsFeed - All news in one place</h1>
        </div>
        {this.state.loading ? <Loading /> : null}

        <div className="row">
          {!this.state.loading &&
            this.state.article.map((e) => {
              return (
                <div className="col-md-4 " key={e.url}>
                  <Newsfeed
                    bgcolor={this.props.bgcolor}
                    color={this.props.color}
                    Imgurl={
                      e.urlToImage
                        ? e.urlToImage
                        : "https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=1060&t=st=1674402656~exp=1674403256~hmac=4342d19c2480c0000e487333e0e954270bb623d85d2d888cb8d4693d3a1fc466"
                    }
                    title={e.title ? e.title.slice(0, 45) : ""}
                    url={e.url}
                    content={e.content ? e.content.slice(0, 80) : ""}
                    author={e.author ? e.author : "Unknown"}
                    date={e.publishedAt ? e.publishedAt : ""}
                    source={e.source.name}
                  />
                </div>
              );
            })}
        </div>

        <div
          style={{ marginTop: "5%" }}
          className=" container d-flex justify-content-between"
        >
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary btn-sm"
            onClick={this.prevPage}
          >
            {"< Prev"}
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalNews / 20)
            }
            className="btn btn-primary btn-sm"
            onClick={this.nextPage}
          >
            {"Next >"}
          </button>
        </div>
      </div>
    );
  }
}
