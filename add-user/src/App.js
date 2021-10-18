import { useState } from "react";
import "./App.css";
// import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import AddUserRef from "./components/Users/AddUser.Refs";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    const id = Math.random();
    setUsers((prevUserList) => {
      return [...prevUserList, { name: username, age: age, id }];
    });
  };
  return (
    <div className="App">
      <AddUserRef onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
