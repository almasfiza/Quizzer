import React from "react";
import { Link } from "react-router-dom";

export default function QuizNav() {
  return (
    <div className="quizNav">
      <p>
        <Link to="/"> Exit </Link>
      </p>
      <p> Level </p>
      <p> Time </p>
      <p> Help </p>
    </div>
  );
}
