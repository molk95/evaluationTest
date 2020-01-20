import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Container from "@material-ui/core/Container";
import ProfileCard from "./components/profileCard";
import PostPage from "./components/postPage";

class App extends React.Component {
  state = {
    usersList: [],
    name: "",
    phone: "",
    email: "",
    postsList: [],
    title: "",
    body: "",
    userId: ""

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
  getPerson = user => {
    this.setState({
      name: user.name,
      phone: user.phone,
      email: user.email
    });
  };
  getPost = post => {
    this.setState({
      title: post.title,
      body: post.body,
      userId: post.userId
    });
  };
  getPostsbyUserId = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=1${this.state.userId}`,
        {
          title: this.state.title,
          body: this.state.body
        }
      )
      .then(this.getAllContacts);
    this.reset();
  };
  render() {
    // const classes = useStyles();
    return (
      <div>
        <Container maxWidth="sm">
          <Switch>
            <Route
              path="/users-list"
              render={() => (
                <div className="users-list">
                  {this.state.usersList.map(el => (
                    <ProfileCard user={el} getPerson={this.getPerson} />
                  ))}
                </div>
              )}
            />
            <Route
              path="/"
              render={() => (
                <div className="posts-list">
                  {this.state.postsList.map(el => (
                    <PostPage post={el} getPost={this.getPost} />
                  ))}
                </div>
              )}
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
