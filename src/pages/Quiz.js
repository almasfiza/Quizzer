import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleChoiceQ from "../components/SingleChoiceQ";
import MultipleChoiceQ from "../components/MultipleChoiceQ";
import AnswerQ from "../components/AnswerQ";
import HomepageHeader from "../components/HomepageHeader";
import QuizNav from "../components/QuizNav";
import Footer from "../components/Footer";
import { HOC } from "../API/HOC";
import Selector from "../components/Selector";

class Quiz extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <QuizNav />

        <HomepageHeader
          title="<Quiz topic>"
          info="<Quiz creater, marks, deadline>"
        />
        <Selector />
        {items.map((item) => (
          <SingleChoiceQ
            id={item.id}
            question={item.questionText}
            option1={item.answerOptions[0].answerText}
            option2={item.answerOptions[1].answerText}
            option3={item.answerOptions[2].answerText}
            option4={item.answerOptions[3].answerText}
          />
        ))}

        <MultipleChoiceQ />
        <AnswerQ />
        <Footer />
      </div>
    );
  }
}

export default HOC(Quiz);
