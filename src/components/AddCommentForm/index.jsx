import React, { Component } from "react";
import styles from "./AddCommentForm.scss";

class AddCommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      isEmptySubmission: false
    }
  }

  handleChange = e => {
    this.setState({
      input: e.target.value,
      isEmptySubmission: false
    })
  }

  handleKeyPress = e => {
    const { input } = this.state;
    const inputLength = input.length;

    if (e.key !== "Enter") return;

    if (inputLength === 0) {
      e.preventDefault();
      this.setState({
        isEmptySubmission: true
      })
      return;
    }

    if (inputLength > 0) {
      e.preventDefault();
      this.props.addComment(input);
      this.setState({
        input: ""
      })
    }
  }

  render() {
    const { input, isEmptySubmission } = this.state;

    return (
      <form className={styles.formBox}>
        <textarea
          type="text"
          placeholder="Add a comment"
          value={input}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={styles.input} />
        {
          isEmptySubmission &&
          <span className={styles.error}>Please, fill in the field.</span>
        }
      </form>
    )
  }
}

export default AddCommentForm;
