import React, { Component } from "react";

export default class comments extends Component {
  render() {
    return (
      <div>
        <h1>All Comments : </h1>
        {this.props.getCommentsbyPostId.map(el => (
          <div className="comments">
            <p>{el.body}</p>
            <h6>{el.email}</h6>
          </div>
        ))}
      </div>
    );
  }
}
