import React from "react";

export default function MultipleChoiceQ() {
  return (
    <div className="MultipleChoiceQ">
      <div className="question">
        <h3>This is a multiple choice question.</h3>
        <p className="desc">Multiple choices can be selected - checkboxes</p>
      </div>
      <div className="responses">
        <div className="option">
          <input id="op1" type="checkbox" value="option1" name="q1" />
          <label for="op1">Option 1</label>
        </div>
        <div className="option">
          <input id="op2" type="checkbox" value="option2" name="q1" />
          <label for="op2">Option 2</label>
        </div>
        <div className="option">
          <input id="op3" type="checkbox" value="option3" name="q1" />
          <label for="op3">Option 3</label>
        </div>
        <div className="option">
          <input id="op4" type="checkbox" value="option4" name="q1" />
          <label for="op4">Option 4</label>
        </div>
      </div>
    </div>
  );
}
