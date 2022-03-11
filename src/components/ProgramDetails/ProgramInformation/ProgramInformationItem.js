import React from "react";
import classes from './ProgramInformationItem.module.css'

//ProgramInformationItem component destructures received data from ProgramInformation
// component and uses it to render program's benefits.

const ProgramInformationItem = (props) => {
  const { title, image, paragraph } = props;

  return (
    <React.Fragment>
      <li className={classes.list}>
        <img src={image} alt={image} />
        <div className={classes.text}>
        <div className={classes.title}>{title}</div>
        <div className={classes.paragraph}>{paragraph}</div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default ProgramInformationItem;
