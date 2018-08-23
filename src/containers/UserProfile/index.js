import React from 'react';
import styles from './UserProfile.scss';
import Comments from "../../components/Comments";
import AddCommentForm from "../../components/AddCommentForm";

const UserProfile = () => (
  <div>
    <Comments />
    <AddCommentForm />
  </div>

);

export default UserProfile;
