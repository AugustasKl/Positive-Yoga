import React, { useState } from "react"
import AnswerItem from "./AnswerItem"
import { DUMMY_QUESTIONS } from "../../DUMMY_DATA/dummyQuestions"
import classes from './QuestionsList.module.css'
import ArrowUp from './../../assets/svg/up.svg'
import ArrowDown from './../../assets/svg/down.svg'
const QuestionList =()=>{
    const[question, setQuestion]=useState(null)


    return(
        <React.Fragment>
            <ul className={classes.list}>

            <li className={classes.question}  onClick={()=>setQuestion('firstQuestion')}>
            <div>{DUMMY_QUESTIONS[0].question}</div>
               {question === 'firstQuestion' ? <img src={ArrowUp} alt='Arrow up'/> : <img src={ArrowDown} alt='Arrow down'/> } 
          {question === 'firstQuestion' && <AnswerItem data={DUMMY_QUESTIONS} selectedQuestion={0}/>}
            </li>
            
            <li className={classes.question} onClick={()=>setQuestion('secondQuestion')}>
            <div>{DUMMY_QUESTIONS[1].question}</div>
          {/* {question === 'secondQuestion' ? <img src={ArrowUp} alt='Arrow up'/> : <img src={ArrowDown} alt='Arrow down'/> }  */}
          {question === 'secondQuestion' && <AnswerItem data={DUMMY_QUESTIONS} selectedQuestion={1}/>}
            </li>

            <li className={classes.question} onClick={()=>setQuestion('thirdQuestion')}>
            <div>{DUMMY_QUESTIONS[2].question}</div>
          {question === 'thirdQuestion' && <AnswerItem data={DUMMY_QUESTIONS} selectedQuestion={2}/>}
            {/* {question === 'thirdQuestion' ? <img src={ArrowUp} alt='Arrow up'/> : <img src={ArrowDown} alt='Arrow down'/> }  */}
            </li>

            <li className={classes.question} onClick={()=>setQuestion('fourthQuestion')}>
              <div>{DUMMY_QUESTIONS[3].question}</div>
              {question === 'fourthQuestion' && <AnswerItem data={DUMMY_QUESTIONS} selectedQuestion={3}/>}
              {/* {question === 'fourthQuestion' ? <img src={ArrowUp} alt='Arrow up'/> : <img src={ArrowDown} alt='Arrow down'/> }  */}
                </li>
                </ul>
      
        </React.Fragment>
    )
}
export default QuestionList