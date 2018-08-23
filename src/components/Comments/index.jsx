import React, { Component, Fragment } from "react";
import styles from "./Comments.scss";
import Comment from "../Comment";
import AddCommentForm from "../../components/AddCommentForm";
import data from "../../userProfileData";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        ...data.comments
      ],
      firstAvailableId: 5,
    }
  }

  addComment = input => {
    const commentText = input;

    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.firstAvailableId,
          photoUrl: "",
          name: "Jan Kowalski",
          text: commentText,
          date: "date will be here"
        }
      ],
      firstAvailableId: this.state.firstAvailableId + 1,
    })
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
              date={comment.date}
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
