import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

type UserData = {
  id: String;
  name: String;
  lastName: String;
  nickName: String;
};

const Home = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    axios
      .get("https://sheet.best/api/sheets/4539054f-7c99-4923-b456-9e48297a0ddb")
      .then((res) => {
        console.log(res.data);

        setUserData(res.data as UserData[]);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <p>Home</p>
      {userData.map((user, index) => (
        <div className={classes.UserBox} key={`${user.id}_${user.name}`}>
          <span>{user.name}</span>
          <span>{user.lastName}</span>
          <span>{user.nickName}</span>
        </div>
      ))}
      <Link to="/details">go to details</Link>
    </div>
  );
};

export default Home;
