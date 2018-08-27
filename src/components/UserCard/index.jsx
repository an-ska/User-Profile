import React, { Component, Fragment } from "react";
import styles from "./UserCard.scss";
import Statistic from "../../components/Statistic";
import Button from "../../components/Button";
import ShareDialog from "../../components/ShareDialog";
import data from "../../userProfileData.json";

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainUser: {},
      isLiked: false,
      isFollowed: false,
      isShareDialogOpened: false
    }
  }

  componentDidMount = () => {
    this.getMainUser();
  }

  getMainUser = () => {
    this.setState({
      mainUser: data.user
    })
  }

  toggleShareDialog = () => {
    this.setState((prevState) => ({
      isShareDialogOpened: !prevState.isShareDialogOpened
    }))
  }

  changeLikesNumber = () => {
    this.setState((prevState) => ({
      mainUser: {
        ...prevState.mainUser,
        likes: this.getUpdatedLikesNumber(prevState.mainUser.likes)
      },
      isLiked: !prevState.isLiked
    }))
  }

  getUpdatedLikesNumber = (currentLikesNumber) => {
    if (!this.state.isLiked) {
      return currentLikesNumber + 1
    } else {
      return currentLikesNumber > 0 ? currentLikesNumber - 1 : currentLikesNumber
    }
  }

  changeFollowersNumber = () => {
    this.setState((prevState) => ({
      mainUser: {
        ...prevState.mainUser,
        followers: this.getUpdatedFollowersNumber(prevState.mainUser.followers)
      },
      isFollowed: !prevState.isFollowed
    }))
  }

  getUpdatedFollowersNumber = (currentFollowersNumber) => {
    if (!this.state.isFollowed) {
      return currentFollowersNumber + 1
    } else {
      return currentFollowersNumber > 0 ? currentFollowersNumber - 1 : currentFollowersNumber
    }
  }

  render(){
    const { mainUser, isLiked, isFollowed, isShareDialogOpened } = this.state;

    return (
      <Fragment>
        <div className={styles.userCard}>
          <div id={mainUser.id}>
            <a
              href="#"
              role="button"
              className={styles.share}>
              <i
                className="fas fa-share-square"
                onClick={this.toggleShareDialog}>
              </i>
            </a>
            <img
              alt="user photo"
              src={mainUser.photoUrl}
              className={styles.avatar}
            />
            <span className={styles.heading}>
              <h1 className={styles.name}>{mainUser.name}</h1>
              <i
                className={`${"fa-heart"} ${styles.like} ${isLiked ? "fas" : "far"}`}
                onClick={this.changeLikesNumber}>
              </i>
            </span>
            <span className={styles.location}>{mainUser.location}</span>
            <div className={styles.content}>
              <ul className={styles.statistics}>
                <Statistic
                  value={mainUser.likes}
                  label="likes"
                />
                <Statistic
                  value={mainUser.following}
                  label="following"
                />
                <Statistic
                  value={mainUser.followers}
                  label="followers"
                />
              </ul>
              <Button
                text={`${isFollowed ? "following" : "follow"}`}
                handleClick={this.changeFollowersNumber}
              />
            </div>
          </div>
        </div>
        <Fragment>
          {
            isShareDialogOpened &&
            <ShareDialog
              icon="fa-times-circle"
              text="Please copy the following link to share this profile:"
              link={mainUser.url}
              handleClick={this.toggleShareDialog}
            />
          }
        </Fragment>
      </Fragment>
    )
  }
}

export default UserCard;
