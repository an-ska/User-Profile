import React, { Component } from "react";
import styles from "./AddCommentForm.scss";

class AddCommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  handleKeyPress = e => {
    const inputLength = this.state.input.length;

    if (e.key !== "Enter") return;

    if (inputLength === 0) {
      e.preventDefault();
      return;
    }

    if (inputLength > 0) {
      e.preventDefault();
      // this.props.addComment(this.state.input);

      this.setState({
        input: ""
      })
    }
  }

  render() {
    return (
      <form className={styles.formBox}>
        <input
          type="text"
          placeholder="Add a comment"
          value={this.state.input}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={styles.input} />
      </form>
    )
  }
}

export default AddCommentForm;
