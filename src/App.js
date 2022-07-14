import AddUser from "./components/users/addUser";
import Card from "./components/ui/card";
import "./styles.css";
import UsersList from "./components/users/usersList";
import { useState } from "react";
export default function App() {
  // const Content = styled.div`
  //   width: 50%;
  //   color: red;

  //   @media (max-width: 768px) {
  //     width: auto;
  //   }
  //   &:hover {
  //     color: blue;
  //   }

  //   & .data {
  //     background: ${(props) => props.bg};
  //   }
  // `;
  // const [userData]=["userName":"myName","age":"24"];
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    console.log("method called !!!!" + uName, uAge);
    setUserList((prevList) => {
      return [
        ...prevList,
        { userName: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };
  return (
    <div className="App">
      <h1>USER NAME WITH AGE</h1>
      <AddUser addUser={addUserHandler} />
      <UsersList userData={userList} />
    </div>
  );
}
