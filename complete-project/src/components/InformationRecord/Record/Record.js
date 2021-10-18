import styles from "./Record.module.css";

const Record = (props) => {
  return (
    <div className={styles.record}>
      {props.name} ({props.age} years old)
    </div>
  );
};

export default Record;
