import React, { useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
const App = () => {
  const [info, setInfo] = useState({ users: "" });

  const onFormSubmit = async () => {
    const response = await axios.get("https://panorbit.in/api/users.json");
    setInfo(response.data);
    //console.log(info);
    //console.log(info.users);

    //info.users.map((i)=>console.log(i.name))
  };
  let itemToRender;

  if (info.users) {
    itemToRender = info.users.map((i) => {
      return (
        <div>
          <li key={i.id}>{i.name}</li>
        </div>
      );
    });
  }

  return (
    <div>
      <Button onClick={onFormSubmit}>click here</Button>
      {itemToRender}
    </div>
  );
};
export default App;
