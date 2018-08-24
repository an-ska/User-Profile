import React from "react";
import  styles from "./Comment.scss";

const Comment = ({id, photo, name, text, age}) => (
  <li id={id}>
    <p>{name}</p>
    <p>{text}</p>
    <p>{age} d</p>
    <img alt="commentator photo" src={photo} className={styles.avatar}/>
  </li>
)

export default Comment;
