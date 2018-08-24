import React, { Component } from "react";
import styles from "./MainUser.scss";
import Button from "../../components/Button";
import data from "../../userProfileData";

class MainUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainUser: {}
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

  render(){
    const { mainUser }  = this.state;

    return (
      <div>
        <div id={mainUser.id}>
          <a href="#">
            <i className="fas fa-share-square"></i>
          </a>
          <p>{mainUser.name}</p>
          <i className="far fa-heart"></i>
          <p>{mainUser.location}</p>
          <img
            alt="commentator photo"
            src={mainUser.photoUrl}
            className={styles.avatar}/>
          <span>likes {mainUser.likes} </span>
          <span>following {mainUser.following} </span>
          <span>followers {mainUser.followers}</span>
        </div>
        <Button
          text="follow"
        />
      </div>
    )
  }
}

export default MainUser;