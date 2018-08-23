import React from 'react';
import styles from './UserProfile.scss';
import data from "../../userProfileData";

const UserProfile = () => (
  <span>{data.user.id}</span>
);

export default UserProfile;
