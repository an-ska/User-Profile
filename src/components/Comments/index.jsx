import React, { Component, Fragment } from "react";
import styles from "./Comments.scss";
import Comment from "../Comment";
import AddCommentForm from "../../components/AddCommentForm";
import data from "../../userProfileData";

let firstAvailableId = 8;

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      areCommentsShown: true
    }
  }

  componentDidMount = () => (
    this.getSortedComments()
  )

  getSortedComments = (a, b) => {
    const comments = [...data.comments];
    const sortedComments = comments.sort((a, b) => {
      return b.ageInDays - a.ageInDays;
    })

    this.setState({
      comments: sortedComments
    })
  }

  handleClick = () => {
    this.setState({
      areCommentsShown: !this.state.areCommentsShown
    })
  }

  addComment = input => {
    const commentText = input;

    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: firstAvailableId,
          photoUrl: "../../images/avatar.png",
          name: "Jan Kowalski",
          text: commentText,
          ageInDays: 0
        }
      ],
    })
    firstAvailableId++;
  }

  render() {
    const { comments, areCommentsShown } = this.state;

    return (
      <Fragment>
        <a
          title="Show or hide the comments"
          onClick={this.handleClick}
          >
          {areCommentsShown ? "Hide" : "Show"} comments({comments.length})
        </a>
        {
          areCommentsShown &&
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
        }
        <AddCommentForm
          addComment={this.addComment}
        />
      </Fragment>
    )
  }
}

export default Comments;
