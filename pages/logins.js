import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // SAM:  Send a POST request to the server with the login form data
      const { data } = await axios.post(
        "/login",
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // SAM:  If the login request was successful, save the JWT in local storage
      localStorage.setItem("token", data.token);
      // SAM:  Redirect the user to the welcome page

      window.location = `/welcome`;
    } catch (error) {
      // SAM:  If the login request failed, set the error state to the error message
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "10%",
          fontFamily: "sans-serif",
        }}
      >
        Please Enter Your Credentials !
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          lineHeight: "5.5",
          fontFamily: "sans-serif",
        }}
      >
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "#20b2aa" }}>{error} !</p>}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            style={{
              border: "2px solid #20b2aa",
              borderRadius: "10px",
              padding: "15px",
              fontSize: "20px",
              fontFamily: "sans-serif",
              marginBottom: "10px",
            }}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            style={{
              border: "2px solid #20b2aa",
              borderRadius: "10px",
              padding: "15px",
              fontSize: "20px",
              fontFamily: "sans-serif",
              marginBottom: "10px",
            }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button type="submit">Log In</button>
          <style jsx>{`
            button {
              background-color: #20b2aa;
              color: white;
              font-family: sans-serif;
              font-size: 20px;
              padding: 15px;
              border-radius: 10px;
              box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
              transition: all 0.2s;
            }
            button:hover {
              background-color: #00ced1;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
              cursor: pointer;
            }
            button:active {
              background-color: #008b8b;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
          `}</style>
        </form>
      </div>
      <img
        src="https://i.ibb.co/4VsQL8h/unnamed.png"
        alt="My image"
        style={{
          width: "10%",
          height: "10%",
          display: "block",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default Login;
