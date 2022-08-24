import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleChoiceQ from "./SingleChoiceQ";

export default function Selector() {
  const [level, setLevel] = useState("selectLevel");

  const [easyContentVisible, setEasyContentVisible] = useState(false);
  const [medContentVisible, setMedContentVisible] = useState(false);
  const [diffContentVisible, setDiffContentVisible] = useState(false);
  const handleOnChange = (e) => {
    setLevel(e.target.value);
  };
  useEffect(() => {
    level === "easy"
      ? setEasyContentVisible(true)
      : setEasyContentVisible(false);
    level === "medium"
      ? setMedContentVisible(true)
      : setMedContentVisible(false);
    level === "difficult"
      ? setDiffContentVisible(true)
      : setDiffContentVisible(false);
  }, [level]);

  return (
    <div>
      <div className="select-tab">
        <div className="select-level">
          <label> Level: </label>
          <select className="level" value={level} onChange={handleOnChange}>
            <option value="selectLevel">Select Level</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <div className="select-tech">
          {" "}
          <label> Technology: </label>
          <select>
            <option value="mongo">MongoDB</option>
            <option value="express">Express</option>
            <option value="react">React</option>
            <option value="node">Node JS</option>
          </select>
        </div>
      </div>
      {easyContentVisible && <SingleChoiceQ question="easy" />}
      {medContentVisible && <SingleChoiceQ question="Medium" />}
      {diffContentVisible && <SingleChoiceQ question="Difficult" />}
    </div>
  );
}
