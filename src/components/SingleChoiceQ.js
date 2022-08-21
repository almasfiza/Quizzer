import React from "react";

export default function SingleChoiceQ() {
  return (
    <div className="SingleChoiceQ">
      <div className="question">
        <h3>This is a single choice question.</h3>
        <p className="desc">Only one choice can be selected - radio</p>
      </div>
      <div className="responses">
        <div className="option">
          <input id="op1" type="radio" value="option1" name="q1" />
          <label for="op1">Option 1</label>
        </div>
        <div className="option">
          <input id="op2" type="radio" value="option2" name="q1" />
          <label for="op2">Option 2</label>
        </div>
        <div className="option">
          <input id="op3" type="radio" value="option3" name="q1" />
          <label for="op3">Option 3</label>
        </div>
        <div className="option">
          <input id="op4" type="radio" value="option4" name="q1" />
          <label for="op4">Option 4</label>
        </div>
      </div>
    </div>
  );
}
