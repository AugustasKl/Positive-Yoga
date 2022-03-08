import React, { useState } from 'react'
import classes from './OfferDetails.module.css'
import SubscriptionMessage from './SubscriptionMessage'

const OfferDetails=()=>{
 const [offer,setOffer]=useState(null)
    const changehandler=(event)=>{
            
            console.log(event.target.value)
            setOffer(event.target.value)
  }
  const handle=()=>{

    console.log(offer)
  }
    return(
        <React.Fragment>
            <div className={classes.form}>
        <div className={classes.options}>
        <h2> Choose your plan and get <span className={classes.highlight}> 7 days free trial</span> </h2>



{/* <form onSubmit={datahandler}>
<label> Male</label>
<input type='radio' name='gender' value='male'/>
<label> Female</label>
<input type='radio' name='gender' value='female'/>
  <button > submit</button>
</form> */}


    <ul>

<li>
<div className={classes.radio}>
  <label className={classes.container}>
      <div className={classes.option}>
        <div className={classes.title}>
      <p>6 month plan</p>
      <p className={classes.discount}>Save 50%</p>
      </div>
      <div className={classes.prices}>
          <p> <b className={classes.bold}>$9.99</b>/month</p>
      </div>
      <div className={classes.details}>
          <del>$119.94</del>
          <p><span className={classes.highlight}>$59.94</span> billed every 6 months</p>
      </div>
</div>
    <input
      type="radio"
      value="6 months plan"
      name='radio'
      onChange={changehandler}
    />
     <span className={classes.checkmark}></span>
  </label>
</div>
</li>


<li>
<div className={classes.radio}>
  <label className={classes.container}>
      <div className={classes.option}>
        <div className={classes.title}>
      <p>3 month plan</p>
      {/* <p className={classes.discount}>Save 50%</p> */}
      </div>
      <div className={classes.prices}>
          <p> <b className={classes.bold}>$14.99</b>/month</p>
      </div>
      <div className={classes.details}>
          <del>$59.97</del>
          <p><span className={classes.highlight}>$44.97</span> billed every 3 months</p>
      </div>
</div>
    <input
      type="radio"
     
      value="3 months plan"
      name='radio'
      onChange={changehandler}
    />
     <span className={classes.checkmark}></span>
  </label>
</div>
</li>


<li>
<div className={classes.radio}>
  <label className={classes.container}>
      <div className={classes.option}>
        <div className={classes.title}>
      <p>1 month plan</p>
      {/* <p className={classes.discount}>Save 50%</p> */}
      </div>
      <div className={classes.prices}>
          <p> <b className={classes.bold}>$19.99</b>/month</p>
      </div>
      <div className={classes.details}>
          {/* <del>$119.94</del> */}
          <p>Billed monthly</p>
      </div>
</div>
    <input
      type="radio"
      value="1 month plan"
      name='radio'
      onChange={changehandler}
    />
<span className={classes.checkmark}></span>
  </label>
</div>
</li>

<button onClick={handle} className={classes.button}> Get your plan</button>
</ul>
</div>
   
    </div>
        </React.Fragment>

    )
}
export default OfferDetails
