import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // New state variable for email
  const history = useNavigate();

  const handleSignUp = async (e) => { // New sign up function
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        username,
        password,
        email,
      });
      if (response.data.message === "User created") {
        handleLogin(e); // Log the user in if sign up is successful
      } else {
        // Handle sign up failure
        // Show an error message to the user
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      // Handle the error
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      if (response.data.token) {
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);
        // Redirect the user to the home page
        history("/"); // useNavigate uses function call instead of push
      } else {
        // Handle login failure
        // Show an error message to the user
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error
    }
  };

  return (


    <div>
      <form onSubmit={handleSignUp}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Sign Up</button>
      </form>



      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>

    
  );
};

export default Auth;