import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2
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
        My name is:
        <br></br>
        Samah Bou Ghannam
        <br></br>
        Welcome to Next.js !<br></br>
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          lineHeight: "2.5",
          fontFamily: "sans-serif",
        }}
      >
        <Link href="/logins">
          <button>Go to Logins</button>
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
        </Link>
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
}
