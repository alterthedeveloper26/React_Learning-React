import { useContext, useRef } from "react";
import { AuthContext } from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import { useHistory } from "react-router";

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authContext = useContext(AuthContext);
  const idToken = authContext.token;
  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAwPlQRL4yVtmkp4amArDH4y3mw8wPfaPE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
