import React from "react";

export default function AnswerQ() {
  return (
    <div className="AnswerQ">
      <div className="question">
        <h3>This is an answer response question.</h3>
        <p className="desc">Input can be a word, sentence or numeric entry. </p>
      </div>
      <div className="responses">
        <input className="response-input" type="text" />
      </div>
    </div>
  );
}
