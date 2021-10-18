import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";
import { useState, useRef } from "react";

const AddUserRef = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInput.current.value;
    const enteredAge = ageInput.current.value;
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

    nameInput.current.value = "";
    ageInput.current.value = "";
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
            <input id="username" type="text" ref={nameInput}></input>
          </div>
          <div className={styles.formInput}>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number" ref={ageInput}></input>
          </div>
          <Button className={styles.submit} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUserRef;
