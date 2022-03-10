import Button from '../utils/Button'
import classes from './Questions.module.css'
import QuestionList from './QuestionsList'

const Questions=()=>{
    return(
        <section className={classes.questions}>
            <h2>Frequently Asked Questions</h2>
            <QuestionList/>
            <Button>Get my plan</Button>
        </section>
    )
}

export default Questions