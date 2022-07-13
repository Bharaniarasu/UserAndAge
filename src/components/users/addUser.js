import { useState } from "react";
import Button from "../ui/button";
import Card from "../ui/card";
import classes from "./addUser.module.css";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("Value is Empty");
    } else if (+enteredAge < 0 || +enteredAge > 120) {
      console.log("Enter a Valid Age");
    } else {
      console.log(enteredUserName, enteredAge);
      setEnteredUserName("");
      setEnteredAge("");
    }
  };

  const enteredUsernameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler} className={classes.input}>
        <label htmlFor="userName">User Name</label>
        <input
          id="useranme"
          type="text"
          value={enteredUserName}
          onChange={enteredUsernameHandler}
        />

        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={enteredAgeHandler}
          max="120"
          min="1"
        />

        <Button type="submit">Add User</Button>
      </form>
      <h4>{enteredUserName}</h4>
      <span>
        <h4>{enteredAge}</h4>
      </span>
    </Card>
  );
};
export default AddUser;
