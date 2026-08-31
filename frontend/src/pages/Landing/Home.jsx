import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <>
      <div>Home</div>
      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
    </>
  );
};

export default Home;
