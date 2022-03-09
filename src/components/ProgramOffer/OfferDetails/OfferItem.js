import { useState } from 'react';
import classes from './OfferItem.module.css'

const OfferItem = (props) => {
    const {title, price, oldPrice, message, promo, newPrice}=props
    // const [offer,setOffer]=useState(null)
    const changehandler=(event)=>{      
        console.log(event.target.value)
        // setOffer(event.target.value)
        props.onSendSelectedData(event.target.value)
}

    // console.log(offer)
  
  return (
    <li>
      <div className={classes.radio}>
        <label className={classes.container}>
          <div className={classes.option}>
            <div className={classes.title}>
              <p>{title}</p>
            {promo && <p className={classes.discount}>{promo}</p>}  
            </div>
            <div className={classes.prices}>
              <p>
                <b className={classes.bold}>${price}</b>/month
              </p>
            </div>
            <div className={classes.details}>
              {message.includes('months') ? <del>${oldPrice}</del> : ''}
              {message && oldPrice && <p className={classes.highlight}>${newPrice}</p>}
               {message && <p>{message}</p>}
            </div>
          </div>
          <input
            type="radio"
            value="6 months plan"
            name="radio"
            onChange={changehandler}
          />
          <span className={classes.checkmark}/>
        </label>
      </div>
    </li>
  );
};

export default OfferItem