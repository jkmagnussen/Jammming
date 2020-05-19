import React from "react";

import github from "./Media/github.png";
import linkedIn from "./Media/linkedIn.png";
import home from "./Media/home.png";

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: 30,
          textAlign: "center",
        }}
      >
        <a href="https://jkmagnussen.com">
          <img
            className="home"
            src={home}
            alt="home"
            style={{
              width: "10vw",
              height: "10vw",
              padding: 20,
            }}
          />
        </a>
        <a href="https://github.com/jkmagnussen">
          <img
            className="github"
            src={github}
            alt="github"
            style={{
              width: "10vw",
              height: "10vw",
              padding: 20,
            }}
          />
        </a>

        <a href="https://linkedin.com/in/joseph-magnussen/">
          <img
            className="linkedIn"
            src={linkedIn}
            alt="linkedIn"
            style={{
              width: "10vw",
              height: "10vw",
              padding: 20,
            }}
          />
        </a>
      </div>
    );
  }
}

export default Footer;
