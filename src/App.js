import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Profiles from "./components/Profiles";
import Posts from "./components/Posts";
import Comments from "./components/comments"

class App extends React.Component {
  state = {
    usersList: [],
    name: "",
    phone: "",
    email: "",
    postsList: [],
    title: "",
    body: "",
    userId: "",
    comments: []
  };

  componentDidMount = () => {
    this.getAllUsers();
    this.getAllPosts();
    console.log("didMount works");
  };

  getAllUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ usersList: res.data }))
      .catch(err => console.log(err));
  };
  getAllPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => this.setState({ postsList: res.data }))
      .catch(err => console.log(err));
  };

  getPostsbyUserId = id => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
      .then(res => {
        this.setState({ postsList: res.data });
      });
  };
  getCommentsbyPostId = id => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
      .then(res => {
        this.setState({ comments: res.data });
      });
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Profiles
                getUsers={this.state.usersList}
                getPosts={this.getPostsbyUserId}
              />
            )}
          />
          <Route
            path="/posts/:id"
            render={() => (
              <Posts
                getPostsbyUserId={this.state.postsList}
                getCommentsPost={this.getCommentsbyPostId}
                getUsers={this.state.usersList}
              />
            )}
          />
          <Route
            exact
            path="/postComments/:id"
            render={() => (
              <Comments
              getCommentsPost={this.state.comments}
                getPostUser={this.state.postsList}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
