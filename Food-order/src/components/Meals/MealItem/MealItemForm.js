import styles from "./MealItemFrom.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [isValid, setValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const amountNum = +enteredAmount;

    if (enteredAmount.trim().length === 0 || amountNum < 1 || amountNum > 5) {
      setValid(false);
      return;
    }

    props.onAddToCart(amountNum);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter amount from 1-5</p>}
    </form>
  );
};

export default MealItemForm;
