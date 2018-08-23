import React from 'react';
import styles from './UserProfile.scss';
import Comments from "../../components/Comments";
import Button from "../../components/Button";

const UserProfile = () => (
  <div>
    <Comments />
    <Button
      text="follow"
      // handleClick={this.handleClick}
    />
  </div>

);

export default UserProfile;
