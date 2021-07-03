import React from "react";
//import "./LandingPage";

class Profile extends React.Component {
  render() {
    var object = this.props.location.state;
    return <div>hello<img src={object.profilepicture} width="20px" height="20px"/></div>;
  }
}

export default Profile;
