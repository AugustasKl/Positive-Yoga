import AnswerItem from "./AnswerItem";
import classes from "./QuestionItem.module.css";
import { ReactComponent as ArrowUp } from "./../../assets/svg/up.svg";
import { ReactComponent as ArrowDown } from "./../../assets/svg/down.svg";
import { useState } from "react";

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
      <div className={classes.answer}>
        {showAnswer ? <ArrowUp /> : <ArrowDown />}
      </div>
      <div>{question} </div>
      {showAnswer && quest === id && (
        <AnswerItem data={answer} selectedQuestion={id} />
      )}
    </li>
  );
};

export default QuestionItem;
