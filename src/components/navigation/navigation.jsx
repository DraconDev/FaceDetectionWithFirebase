import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <p
          className="f3 link dim black underline pa3 pointer"
          // onClick={() => onRouteChange("signin")}
          onClick={() => onRouteChange("signin")}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <p
          className="f3 link dim black underline pa3 pointer"
          // onClick={() => onRouteChange("signin")}
          onClick={() => onRouteChange("home")}
        >
          Try
        </p>
        <p
          className="f3 link dim black underline pa3 pointer"
          // onClick={() => onRouteChange("signin")}
          onClick={() => onRouteChange("register")}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
