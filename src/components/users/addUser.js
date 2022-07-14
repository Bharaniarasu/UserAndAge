import { useState } from "react";
import Button from "../ui/button";
import Card from "../ui/card";
import ErrorModel from "../ui/errorModel";
import classes from "./addUser.module.css";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorHandler, setErrorHandler] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorHandler({
        header: "Invalid Input field !!!",
        message: "Please enter a valid input ..."
      });
    } else if (+enteredAge < 0 || +enteredAge > 120) {
      setErrorHandler({
        header: "Invalid Age !!!",
        message: "Enter a proper age ( greater than 0 )..."
      });
    } else {
      console.log(enteredUserName, enteredAge);
      props.addUser(enteredUserName, enteredAge);
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

  const clearErrorHandler = (props) => {
    setErrorHandler(null);
  };

  return (
    <>
      {errorHandler && (
        <ErrorModel
          header={errorHandler.header}
          message={errorHandler.message}
          clearError={clearErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
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
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
