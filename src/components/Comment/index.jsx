import React from "react";

const Comment = ({id, photo, name, text, date}) => (
  <li id={id}>
    <p>{name}</p>
    <p>{text}</p>
    <p>{date}</p>
    <img alt="commentator photo" src={photo} />
  </li>
)

export default Comment;
