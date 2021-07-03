import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import Profile from "./Profile";
//import { Button } from "semantic-ui-react";
const LandingPage = ({ info }) => {
  let itemToRender;

  if (info.users) {
    itemToRender = info.users.map((object) => {
      return (
        <div style={{ right: "20px" }}>
          <ul>
            <Link
              to={{
                pathname: "/profile",
                state: object
                // your data array of objects
              }}
            >
              <li style={{ margin: "5px" }} key={object.id}>
                <img
                  src={object.profilepicture}
                  alt=""
                  height="17px"
                  width="17px"
                  style={{ borderRadius: "50%", marginRight: "5px" }}
                  margin="3px"
                />
                {object.name}
              </li>
            </Link>
          </ul>
        </div>
      );
    });
  }

  return (
    <div style={{ alignItems: "center" }}>
      <Card>
        <Card.Content>
          <Card.Header>Select an Account</Card.Header>
        </Card.Content>
        {itemToRender}
      </Card>
    </div>
  );
};
export default LandingPage;
