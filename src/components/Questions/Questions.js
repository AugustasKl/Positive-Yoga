import Button from '../utils/Button'
import classes from './Questions.module.css'
import QuestionList from './QuestionsList'

const Questions=()=>{

  const buttonHandler=()=>{
      console.log('labas')
      window.scrollTo(0,0)
  }

    return(
        <section className={classes.questions}>
            <h2>Frequently Asked Questions</h2>
            <QuestionList/>
            <Button onClick={buttonHandler}>Get my plan</Button>
        </section>
    )
}

export default Questions