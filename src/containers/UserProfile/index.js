import React from "react";
import styles from "./UserProfile.scss";
import UserCard from "../../components/UserCard";
import Comments from "../../components/Comments";

const UserProfile = () => (
  <div className={styles.userProfile}>
    <UserCard />
    <Comments />
  </div>
);

export default UserProfile;
