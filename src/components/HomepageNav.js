import React from "react";
import { Link } from "react-router-dom";

export default function HomepageNav() {
  return (
    <div className="HPNav">
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
      <Link to="/register"> Register </Link>
    </div>
  );
}
