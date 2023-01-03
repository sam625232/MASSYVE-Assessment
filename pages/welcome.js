import React from "react";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const Welcome = ({ username }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "10%",
          lineHeight: "2.5",
          fontFamily: "sans-serif",
        }}
      >
        Congrats {username} !<br></br>
        You solved our assessment !<br></br>
        Welcome to MASSYVE !<br></br>
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

Welcome.getInitialProps = async (ctx) => {
  const cookies = new Cookies(ctx.req && ctx.req.headers.cookie);
  const jwt = cookies.get("jwt");
  let username = "";

  if (jwt) {
    const user = jwtDecode(jwt);
    username = user.username;
  }

  return { username };
};

export default Welcome;
