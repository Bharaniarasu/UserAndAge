import Card from "../ui/card";
import styles from "./usersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.userData.map((user) => (
          <li key={user.id}>
            {" "}
            {user.userName} ( {user.age} years old )
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
