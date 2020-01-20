import React, { Component } from "react";
import ProfileCard from './profileCard'
export default class Profiles extends Component {
  render() {
    return (
      <div className="users-list">
        {this.props.getUsers.map(el => (
          <ProfileCard 
          getPost={this.props.getPosts}
          user={el}
          
          />
        ))}
      </div>
    );
  }
}
