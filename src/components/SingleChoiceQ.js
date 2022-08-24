import React from "react";

export default function SingleChoiceQ(props) {
  return (
    <div className="SingleChoiceQ">
      <div className="question">
        <h3>{props.question}</h3>
        <p className="desc">Only one choice can be selected - radio</p>
      </div>
      <div className="responses">
        <div className="option">
          <label htmlFor={props.option1}>
            {" "}
            <input
              id={props.id + "1"}
              type="radio"
              value={props.id + "1"}
              name={props.id}
            />
            {props.option1}
          </label>
        </div>
        <div className="option">
          <label htmlFor={props.id + "2"}>
            <input
              id={props.id + "2"}
              type="radio"
              value={props.option2}
              name={props.id}
            />
            {props.option2}
          </label>
        </div>
        <div className="option">
          <label htmlFor={props.id + "3"}>
            <input
              id={props.id + "3"}
              type="radio"
              value={props.option3}
              name={props.id}
            />
            {props.option3}
          </label>
        </div>
        <div className="option">
          <label htmlFor={props.id + "4"}>
            <input
              id={props.id + "4"}
              type="radio"
              value={props.option4}
              name={props.id}
            />
            {props.option4}
          </label>
        </div>
      </div>
    </div>
  );
}
