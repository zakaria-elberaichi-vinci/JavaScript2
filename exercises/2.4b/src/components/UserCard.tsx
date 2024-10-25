import "./UserCard.css"
import {User} from "../type"

interface UserProps {
  user :User;
}


const UserCard = ( props : UserProps) => {

    return ( 
        <div>
        <h1 className="UserName">{props.user.name}</h1>
        <p className="age">{props.user.age}</p>
        <p className=
        {props.user.isOnline ? "online" : "offline"

        }
        >
            {props.user.isOnline ? "En ligne " : "Hors ligne "}
        </p>
        </div>
    );
};


export default UserCard;