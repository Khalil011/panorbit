import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import axios from "axios";
const App = () => {
  const [info, setInfo] = useState({ users: "" });

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("https://panorbit.in/api/users.json");
      setInfo(response.data);
      //console.log(info);
      console.log(info.users);
    };
    fetchdata();
    //info.users.map((i)=>console.log(i.name))
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage info={info} />
        </Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </Router>
  );
};
export default App;
