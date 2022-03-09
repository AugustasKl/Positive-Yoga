import ProgramDetails from '../../ProgramDetails/ProgramDetails';
import classes from './FirstOffer.module.css'

const FirstOffer = () => {
  return (
    <section className={classes.offer}>
      <h2>Get access to your yoga program now!</h2>
      <ProgramDetails />
    </section>
  );
};
export default FirstOffer;
