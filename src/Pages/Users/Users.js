import React, { useState, useEffect } from "react";
import "./Users.css";
import UserCard from "../../Components/UserCard/UserCard";
import axios from "axios";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUsersAxios();
  }, []);

  // const getUsersFetch = () => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //         .then(response => response.json())
  //         .then(json => setUsers(json))
  //         .catch(error => console.log("Can not fetch Api"))
  // }

  const getUsersAxios = async () => {
    // version1
    // ----------------------------------
    // setIsLoading(true);
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     setUsers(response.data);
    //     setIsLoading(false);
    //   })
    // .catch((error) => console.log("Can not fetch Api"));
    // version 2
    // -----------------------------------
    try {
      setIsLoading(true);
      // /step1 i should wait until step1 is finished
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      //   step2
      setUsers(result.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div>
      <h1>Welcome, this is the Users List Page</h1>

      {isLoading ? (
        <h3>estennaaaaa</h3>
      ) : isError ? (
        <h1>Error To fetching Data</h1>
      ) : (
        <div className="usersList">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListUsers;
