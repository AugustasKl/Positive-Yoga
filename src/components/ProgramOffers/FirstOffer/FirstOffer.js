import ProgramDetails from '../../ProgramDetails/ProgramDetails/ProgramDetails'
import classes from './FirstOffer.module.css'

const FirstOffer = () => {
  return (
    <section className={classes.offer}>
      <h1 className={classes.header}>Get access to your yoga program now!</h1>
      <ProgramDetails />
    </section>
  );
};
export default FirstOffer;
