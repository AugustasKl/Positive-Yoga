import AnswerItem from "../AnswerItem/AnswerItem";
import classes from "./QuestionItem.module.css";
import { ReactComponent as ArrowUp } from "./../../../assets/svg/up.svg";
import { ReactComponent as ArrowDown } from "./../../../assets/svg/down.svg";
import { useState } from "react";

// QuestionItem component destructures received data from QuestionsList component.
// This data is used with two created useState hooks.

// const [quest, setQuest] = useState(null); is used to select specific question
// and render the respective answer which are recognized by specific ID

// const [showAnswer, setShowAnser] = useState(false); is used for rendering
// arrow images based on if the user clicked on question element and also
// this hook is involved in rendering the answer itself.

const QuestionItem = (props) => {
  const { id, question, answer } = props;
  const [quest, setQuest] = useState(null);
  const [showAnswer, setShowAnser] = useState(false);

  const toggleAnswersHandler = () => {
    setQuest(id);
    setShowAnser((prevState) => !prevState);
  };

  return (
    <li className={classes.question} onClick={toggleAnswersHandler}>
      <div className={classes.answer}>{showAnswer ? <ArrowUp /> : <ArrowDown />}</div>
      <div>{question} </div>
      {showAnswer && (quest === id && <AnswerItem data={answer} selectedQuestion={id} />)}
    </li>
  );
};

export default QuestionItem;
