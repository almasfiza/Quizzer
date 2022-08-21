import React from "react";

export default function HomepageHeader(props) {
  return (
    <div className="HPHeader">
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </div>
  );
}
HomepageHeader.defaultProps = {
  title: "Quizzer",
  info: "Welcome to the world of quizzes!",
};
