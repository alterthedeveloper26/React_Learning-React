import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return (
    <div className={styles["error-message"]}>
      <div className={styles["error-message__header"]}>
        <h2>Invalid Input</h2>
      </div>
      <div className={styles["error-message__body"]}>
        <div>
          <p>{props.message}</p>
        </div>
      </div>
      <div className={styles["error-message__footer"]}>
        <div className={styles.okay}>Okay</div>
      </div>
    </div>
  );
};

export default ErrorMessage;
