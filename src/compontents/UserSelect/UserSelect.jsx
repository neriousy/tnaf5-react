import React from "react";
import styles from './UserSelect.module.scss';

function UserSelect({users, func}){
  return(
    <select onChange={func} className={styles.select}>
      <option value={0}>Select a user</option>
      {users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
    </select>
  )
}

export default UserSelect;