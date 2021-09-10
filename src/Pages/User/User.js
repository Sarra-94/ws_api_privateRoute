import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "./User.css";
import avatar from "../../Assets/avatar.png";
import axios from "axios";

const User = ({ history, match }) => {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoad(true);
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
    getUser();
  }, [match.params.id]);

  return load ? (
    <h1>Loading</h1>
  ) : (
    <div>
      {isError ? (
        <h1>error to fetch</h1>
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
