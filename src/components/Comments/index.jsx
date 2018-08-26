import React, { Component } from "react";
import styles from "./Comments.scss";
import Comment from "../Comment";
import AddCommentForm from "../../components/AddCommentForm";
import data from "../../userProfileData.json";

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

  toggleComments = () => {
    this.setState((prevState) => ({
      areCommentsShown: !prevState.areCommentsShown
    }))
  }

  addComment = input => {
    this.setState((prevState) => ({
      comments: [
        ...prevState.comments,
        {
          id: firstAvailableId,
          photoUrl: "../../images/avatar.png",
          name: "Jan Kowalski",
          text: input,
          ageInDays: 0
        }
      ],
    }))
    firstAvailableId++;
  }

  render() {
    const { comments, areCommentsShown } = this.state;

    return (
      <div className={styles.commentsContainer}>
        <a
          role="button"
          className={styles.toggleComments}
          onClick={this.toggleComments}>
          {areCommentsShown ? "Hide" : "Show"} comments ({comments.length})
        </a>
        {
          areCommentsShown &&
          <ul className={styles.comments}>
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
        <AddCommentForm addComment={this.addComment} />
      </div>
    )
  }
}

export default Comments;
