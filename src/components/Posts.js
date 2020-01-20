import React, { Component } from 'react'
import PostCard from "./postCard"


export default class Posts extends Component {
  render() {
    return (
      <div className="posts-list">
      {this.props.getPostsbyUserId.map(el => (
        <PostCard
          post={el}
          getComments={this.props.getCommentsPost}
        />
      ))}
    </div>
    )
  }
}

