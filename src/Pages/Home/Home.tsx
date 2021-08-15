import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/details">go to details</Link>
    </div>
  );
};

export default Home;
