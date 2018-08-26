import React from "react";
import  styles from "./Comment.scss";

const Comment = ({id, photo, name, text, age}) => (
  <li id={id}>
    <img alt="commentator photo" src={photo} className={styles.avatar}/>
    <span>{name}</span>
    <p>{text}</p>
    <span>{age}d</span>
  </li>
)

export default Comment;
