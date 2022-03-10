import classes from "./AnswerItem.module.css";

const AnswerItem = (props) => {
  return <p className={classes.answer}>{props.data}</p>;
};

export default AnswerItem;
