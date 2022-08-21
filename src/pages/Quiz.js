import React from "react";
import SingleChoiceQ from "../components/SingleChoiceQ";
import MultipleChoiceQ from "../components/MultipleChoiceQ";
import AnswerQ from "../components/AnswerQ";
import HomepageHeader from "../components/HomepageHeader";

export default function Quiz() {
  return (
    <div>
      <HomepageHeader
        title="<Quiz toppic>"
        info="<Quiz creater, marks, deadline>"
      />
      <SingleChoiceQ />
      <MultipleChoiceQ />
      <AnswerQ />
    </div>
  );
}
