import classes from "./AnswerItem.module.css";

//AnswerItem component recereives answer to specific question as props
//from QuestionItem component and renders it

const AnswerItem = (props) => {
  return <p className={classes.answer}>{props.data}</p>;
};

export default AnswerItem;
