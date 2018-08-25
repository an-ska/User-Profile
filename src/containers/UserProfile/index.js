import React from "react";
import styles from "./UserProfile.scss";
import MainUser from "../../components/MainUser";
import Comments from "../../components/Comments";

const UserProfile = () => (
  <div className={styles.userProfile}>
    {/* <div className={styles.backgroundDecor}></div> */}
    <MainUser />
    <Comments />
  </div>

);

export default UserProfile;
