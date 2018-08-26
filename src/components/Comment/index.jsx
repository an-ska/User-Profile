import React from "react";
import  styles from "./Comment.scss";

const Comment = ({id, photo, name, text, age}) => (
  <li id={id} className={styles.comment}>

    <div className={styles.commentLeft}>
      <img alt="commentator photo" src={photo} className={styles.avatar} />
        <div className={styles.commentBody}>
          <span className={styles.name}>{name}</span>
          <p className={styles.text}>{text}</p>
        </div>
    </div>
    <span className={styles.commentRight}>{age}d</span>
  </li>
)

export default Comment;
