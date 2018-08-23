import React, { Component } from "react";
import styles from "./Comments.scss";
import Comment from "../Comment";
import data from "../../userProfileData";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        ...data.comments
      ]
    }
  }

  render() {

    return (
      <ul>
        {this.state.comments.map(comment =>
          <Comment
            key={comment.id}
            id={comment.id}
            photo={comment.photoUrl}
            name={comment.name}
            text={comment.text}
            date={comment.date}
          />
        )}
      </ul>
    )
  }
}

export default Comments;
