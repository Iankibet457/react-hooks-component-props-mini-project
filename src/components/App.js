import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
// import Article from "./Article";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header
      name={blogData.name}
      />
      <About
      image = {blogData.image}
      About = {blogData.about}

      />
      <ArticleList
      title={blogData.posts[0].title}
      date={blogData.posts[0].date}
      preview={blogData.posts[0].preview}
      
      />
    </div>
  );
}

export default App;
