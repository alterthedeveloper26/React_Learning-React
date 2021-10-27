import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import { AuthContext } from "../../store/auth-context";
import { Fragment } from "react/cjs/react.production.min";

const MainNavigation = () => {
  const authContext = useContext(AuthContext);

  const { isLoggedIn } = authContext;

  const logoutHandler = () => {
    authContext.logout();
    // console.log("Aint do shit!!!");
  };

  const login = (
    <li>
      <Link to="/auth">Login</Link>
    </li>
  );

  const logout = (
    <Fragment>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </Fragment>
  );

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>{!isLoggedIn ? login : logout}</ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
