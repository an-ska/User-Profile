import React, { Component, Fragment } from "react";
import styles from "./MainUser.scss";
import Statistic from "../../components/Statistic";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog";
import data from "../../userProfileData";

class MainUser extends Component {
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
            <a href="#">
              <i
                className="fas fa-share-square"
                onClick={this.toggleDialog}
              ></i>
            </a>
            <p>{mainUser.name}</p>
            <i
              className={`${"fa-heart"} ${isLiked ? "fas" : "far"}`}
              onClick={this.changeLikesNumber}>
            </i>
            <p>{mainUser.location}</p>
            <img
              alt="commentator photo"
              src={mainUser.photoUrl}
              className={styles.avatar}
            />
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
          </div>
          <Button
            text={`${isFollowed ? "following" : "follow"}`}
            handleClick={this.changeFollowersNumber}
          />
        </div>
        <div>
          {
            isDialogOpened &&
            <Dialog
              icon="fa-times-circle"
              text="Copy the following link to share this profile:"
              link={mainUser.url}
              handleClick={this.toggleDialog}
             />
          }
        </div>
      </Fragment>
    )
  }
}

export default MainUser;
