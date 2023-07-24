import React from "react";
import "./Home.css";

import useMouse from "@react-hook/mouse-position";

const Home = () => {
  const verticalMode = window.innerWidth > 1000 ? true : false;
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  const mW: number =
    mouse.x != null ? (mouse.x * 100) / window.innerWidth - 50 : 0;

  const moveMouse = {
    transform: "translateX(" + -mW / 2 + "%)",
    transition: "transform 0.25s ease",
  };

  return (
    <div className="home-container">
      <div className="links" ref={ref} style={verticalMode ? moveMouse : {}}>
        <div className="link">BLOG</div>
        <div className="divider">{verticalMode ? "-" : ""}</div>
        <div className="link">WORK</div>
        <div className="divider">{verticalMode ? "-" : ""}</div>
        <div className="link">CONTACT</div>
      </div>
    </div>
  );
};

export default Home;
