import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingDuration = (expTime) => {
  const currentTime = new Date().getTime();
  const adjExpTime = new Date(expTime).getTime();
  return adjExpTime - currentTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpiration = localStorage.getItem("expTime");

  const remainingTime = calculateRemainingDuration(storedExpiration);

  if (remainingTime < 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  let logoutTimer;

  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggin = !!token; //turn something into false or tru

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token, expTime) => {
    localStorage.setItem("expTime", expTime);
    localStorage.setItem("token", token);
    setToken(token);

    const remainingTime = calculateRemainingDuration(expTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  //Automatically set logout user if data is retrieve from Storage
  //Will only run once when the browser reload and re-initial tokenData
  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      // eslint-disable-next-line
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, []);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
