import React, {useState} from "react";
import UserInfo from "../compontents/UserInfo/UserInfo";
import UserSelect from "../compontents/UserSelect/UserSelect";

const userList = [{id: 1, name : "John Doe", "birth" : "1990-01-01", email: "test@gmail.com"},
{id: 2, name : "Jane Doe", "birth" : "1990-05-05", email: "test@gmail.com"},
{id: 3, name : "Bob Smith", "birth" : "1990-01-01", email: "test@gmail.com"}]


function App() {
  const[currentUser, setCurrentUser] = useState(0); 

  const selectChange = e => {
    setCurrentUser(e.target.value)
  }
  


  return (
    <>
      <h1>User Information </h1>
      <UserSelect func={selectChange} users={userList}/>

      {currentUser > 0 ? <UserInfo user={userList[currentUser - 1]}/> : <></>}

      
    </>
  );
}

export default App;
