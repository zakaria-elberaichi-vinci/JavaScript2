import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Users from "./Users"
import {User} from "../type"


const App = () => {
  const title = "Welcome to My App";
  
  const userprime: User[] = [
    {
      name: "Alice",
      age: 25,
    },
    {
      name: "Bob",
      age: 30,
    },
    {
      name: "Charlie",
      age: 35,
    }
  ];

  const footerText = "© 2023 My App";
  return (
    <div>
     <PageTitle title={title}/>
     <Users users={userprime}/>
      <Footer footer={footerText}/>
    </div>
  );
};

export default App;
