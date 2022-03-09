import classes from "./AnswerItem.module.css";

const AnswerItem = (props) => {
  const { data, selectedQuestion } = props;
//   console.log(data[selectedQuestion].answer);
  return <p className={classes.answer}>
         {data[selectedQuestion].answer}
         </p>;
};

export default AnswerItem;
