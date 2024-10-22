import { User } from "../type";

interface UsersProps {
  users: User[];
}

const Users = (props: UsersProps) => (
  <div>
    
    <ul>
      {props.users.map((user) => (
        <li key={user.name}>
          <strong>{user.name}</strong> 
           <p>{user.age} ans </p>  
        </li>
      ))}
    </ul>
  </div>
);


export  default Users;