import React from "react";
import SingleChoiceQ from "../components/SingleChoiceQ";
import MultipleChoiceQ from "../components/MultipleChoiceQ";
import AnswerQ from "../components/AnswerQ";
import HomepageHeader from "../components/HomepageHeader";
import QuizNav from "../components/QuizNav";
import Footer from "../components/Footer";
export default function Quiz() {
  return (
    <div>
      <QuizNav />
      <HomepageHeader
        title="<Quiz toppic>"
        info="<Quiz creater, marks, deadline>"
      />
      <SingleChoiceQ />
      <MultipleChoiceQ />
      <AnswerQ />
      <Footer />
    </div>
  );
}
