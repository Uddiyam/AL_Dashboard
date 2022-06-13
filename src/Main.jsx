import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

export default function Main({ color }) {
  const [color_, setColor] = useState(color);

  useEffect(() => {
    setColor("black");
    return () => {
      setColor("black");
    };
  }, [color]);

  const onClick = (e) => {
    e.preventDefault();
    setColor("black");
    document.getElementById(e.target.name).style.fill = color_;
    e.target.style.color = "white";
    e.target.style.backgroundColor = "black";
  };
  return (
    <>
      <div className="wrap">
        <ul className="region_name">
          <li onClick={onClick}>
            <Link to="/" name="all">
              전국
            </Link>
          </li>
          <li onClick={onClick}>
            <Link to="/Seoul" name="seoul">
              서울
            </Link>
          </li>
          <li onClick={onClick}>
            <Link to="/Busan" name="busan">
              부산
            </Link>
          </li>
          <li onClick={onClick}>
            <Link to="/Daegu" name="daegu">
              대구
            </Link>
          </li>
          <li onClick={onClick}>
            <Link to="/Gangwon" name="gangwon">
              강원
            </Link>
          </li>
          <li onClick={onClick}>
            <Link to="/Gyeonggi" name="gyeonggi">
              경기
            </Link>
          </li>
          <li onClick={onClick}>
            <Link to="/Incheon" name="incheon">
              인천
            </Link>
          </li>
          <li onClick={onClick}>
            <Link to="/Jeju" name="jeju">
              제주
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
