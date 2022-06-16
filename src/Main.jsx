import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

export default function Main({ color }) {
  const [color_, setColor] = useState(color);

  useEffect(() => {
    setColor("#D4B9F9");
    return () => {
      setColor("#D4B9F9");
    };
  }, [color]);

  const onClick = (e) => {
    e.preventDefault();
    setColor("#D4B9F9");
    document.getElementById(e.target.name).style.fill = color_;
    e.target.style.color = "black";
    e.target.style.backgroundColor = "#D4B9F9";
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
