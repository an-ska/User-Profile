import React, { Component, Fragment } from "react";
import styles from "./Comments.scss";
import Comment from "../Comment";
import AddCommentForm from "../../components/AddCommentForm";
import data from "../../userProfileData";

let firstAvailableId = 5;

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        ...data.comments
      ],
    }
  }

  addComment = input => {
    const commentText = input;

    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: firstAvailableId,
          photoUrl: "",
          name: "Jan Kowalski",
          text: commentText,
          ageInDays: 0
        }
      ],
    })
    firstAvailableId++;
  }

  render() {
    return (
      <Fragment>
        <ul>
          {this.state.comments.map(comment =>
            <Comment
              key={comment.id}
              id={comment.id}
              photo={comment.photoUrl}
              name={comment.name}
              text={comment.text}
              age={comment.ageInDays}
            />
          )}
        </ul>
        <AddCommentForm
          addComment={this.addComment}
        />
      </Fragment>
    )
  }
}

export default Comments;
