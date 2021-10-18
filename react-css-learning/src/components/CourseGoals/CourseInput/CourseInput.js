import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isEmpty) {
      props.onAddGoal(enteredValue);
      setIsEmpty(true);
    }
    return;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          isEmpty && styles["form-control--invalid"]
        }`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
