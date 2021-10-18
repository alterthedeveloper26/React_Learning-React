import Button from "../ui/Button/Button";
import styles from "./ProfileFactory.module.css";
import { useState } from "react";

const ProfileFactory = (props) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
  });

  const nameHandler = (event) => {
    setInput(() => {
      return {
        ...input,
        name: event.target.value,
      };
    });
  };

  const ageHandler = (event) => {
    setInput(() => {
      return {
        ...input,
        age: event.target.value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddRecord(input);
    return;
  };

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles["input-items"]}>
          <div className={styles["input-item"]}>
            <label className={styles["input-item__label"]}>Username</label>
            <input
              className={styles["input-item__field"]}
              type="text"
              onChange={nameHandler}
            ></input>
          </div>
          <div className={styles["input-item"]}>
            <label className={styles["input-item__label"]}>Age</label>
            <input
              className={styles["input-item__field"]}
              type="number"
              onChange={ageHandler}
            ></input>
          </div>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default ProfileFactory;
