import React, { useContext } from "react";

import Login from "./components/Login/Login";
// import LoginReducer from "./components/Login/Login.reducer";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={ctx.isLoggedIn} onLogout={ctx.onLogout} />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
      </main>
    </React.Fragment>
  );
}

export default App;
