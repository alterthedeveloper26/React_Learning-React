import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter non-empty values as name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter age bigger than 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    console.log(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const pressOkayHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={pressOkayHandler}
        />
      )}
      <Card>
        <form className={styles.form} onSubmit={addUserHandler}>
          <div className={styles.formInput}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={usernameChangeHandler}
              value={enteredUsername}
            ></input>
          </div>
          <div className={styles.formInput}>
            <label htmlFor="age">Age (years)</label>
            <input
              id="age"
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
            ></input>
          </div>
          <Button className={styles.submit} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
