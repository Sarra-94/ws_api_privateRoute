import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "./User.css";
import avatar from "../../Assets/avatar.png";
import axios from "axios";

const User = ({ location, history, match }) => {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);

  const getUser = async () => {
    setLoad(true);
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${match.params.id}`
      );
      setUser(response.data);
      setLoad(false);
    } catch (error) {
      setisEerror(true);
      setLoad(false);
    }
  };
  useEffect(getUser(), []);

  return load ? (
    <h1>Loading</h1>
  ) : (
    <div>
      {isError ? (
        <p>error to fetch</p>
      ) : (
        <div>
          <h1>Welcome, this is the User page</h1>
          <img src={avatar} alt="avatar" />
          <h2>{user.name}</h2>
          <h5>{user.username}</h5>
          <h5>{user.email}</h5>
          <h5>{user.phone}</h5>
          <Button
            variant="info"
            className="go-back-btn"
            onClick={() => history.goBack()}
          >
            Go Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default User;
