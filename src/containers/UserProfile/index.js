import React from 'react';
import styles from './UserProfile.scss';
import data from "../../userProfileData";
import AddCommentForm from "../../components/AddCommentForm";

const UserProfile = () => (
  <div>
    {/* <span>{data.user.id}</span> */}
    <AddCommentForm />
  </div>

);

export default UserProfile;
