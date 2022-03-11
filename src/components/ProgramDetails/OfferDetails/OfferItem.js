import classes from "./OfferItem.module.css";


//OfferItem is responsibe for rendering subscription options data

const OfferItem = (props) => {
  const { title, price, oldPrice, message, promo, newPrice } = props;

  // selected subscription option is being sent to parent component (OfferList.js)
  const changehandler = (event) => {
    props.onSendSelectedData(event.target.value);
  };

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
              <p><b className={classes.bold}>${price}</b>/month</p>
            </div>
            <div className={classes.details}>
              {message.includes("months") ? <del>${oldPrice}</del> : ""}
              {message && oldPrice && (<p className={classes.highlight}>${newPrice}</p>)}
              {message && <p>{message}</p>}
            </div>
          </div>
          <input
            type="radio"
            value={title}
            name="radio"
            onChange={changehandler}
          />
          <span className={classes.checkmark} />
        </label>
      </div>
    </li>
  );
};

export default OfferItem;
