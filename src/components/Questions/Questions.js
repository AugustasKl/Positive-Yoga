import classes from './Questions.module.css'
import QuestionList from './QuestionsList'

const Questions=()=>{

    return(
        <section className={classes.questions}>
            <h2>Frequently Asked Questions</h2>
            <QuestionList/>
            <button className={classes.button}> Get my plan</button>
        </section>
    )
}

export default Questions