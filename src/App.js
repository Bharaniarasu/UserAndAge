import AddUser from "./components/users/addUser";
import Card from "./components/ui/card";
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

  return (
    <div className="App">
      <h2>Welcome</h2>
      <AddUser />
    </div>
  );
}
