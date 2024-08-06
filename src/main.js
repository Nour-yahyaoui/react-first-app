import React from "react";
import './main.css'

const Main = () => {
  return (
    <main>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <br />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <br />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <br />
      </form>
    </main>
  );
};

export default Main;