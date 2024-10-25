
import UserCard  from "./UserCard";
import "./App.css";

const users = [
  { name: "John Doe", age: 25, isOnline: true },
  { name: "Jane Doe", age: 22, isOnline: false },
  { name: "Foo Bar", age: 30, isOnline: true },
];



const App = () => (
  <>
    <h1>Users</h1>
    {users.map((user, index) => (
      <UserCard key={index} user={user} />
    ))}
  </>
);

export default App;