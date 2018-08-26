import React, { Component, Fragment } from "react";
import styles from "./UserCard.scss";
import Statistic from "../../components/Statistic";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog";
import data from "../../userProfileData";

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainUser: {},
      isLiked: false,
      isFollowed: false,
      isDialogOpened: false
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

  toggleDialog = () => {
    this.setState((prevState) => ({
      isDialogOpened: !prevState.isDialogOpened
    }))
  }

  changeLikesNumber = () => {
    if (!this.state.isLiked) {
      this.setState((prevState) => ({
        mainUser: {
          ...prevState.mainUser,
          likes: prevState.mainUser.likes + 1
        }
      }))
    } else {
      this.setState((prevState) => ({
        mainUser: {
          ...prevState.mainUser,
          likes: prevState.mainUser.likes > 0 ? prevState.mainUser.likes - 1 : prevState.mainUser.likes
        }
      }))
    }

    this.setState((prevState) => ({
      isLiked: !prevState.isLiked
    }))
  }

  changeFollowersNumber = () => {
    if (!this.state.isFollowed) {
      this.setState((prevState) => ({
        mainUser: {
          ...prevState.mainUser,
          followers: prevState.mainUser.followers + 1
        }
      }))
    } else {
      this.setState((prevState) => ({
        mainUser: {
          ...prevState.mainUser,
          followers: prevState.mainUser.followers > 0 ? prevState.mainUser.followers - 1 : prevState.mainUser.followers
        }
      }))
    }

    this.setState((prevState) => ({
      isFollowed: !prevState.isFollowed
    }))
  }

  render(){
    const { mainUser, isLiked, isFollowed, isDialogOpened }  = this.state;

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
                onClick={this.toggleDialog}>
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
            isDialogOpened &&
            <Dialog
              icon="fa-times-circle"
              text="Please copy the following link to share this profile:"
              link={mainUser.url}
              handleClick={this.toggleDialog}
            />
          }
        </Fragment>
      </Fragment>
    )
  }
}

export default UserCard;
