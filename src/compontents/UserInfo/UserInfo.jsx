import React from "react";
import styles from './UserInfo.module.scss';

function UserInfo({user}){
  return(
    <div className={styles.userInfo}>
      <h3 className={styles.name}>{user.name}</h3>
      <span className={styles.birth}>Date of birth:{user.birth}</span>
      <span className={styles.email}>Email: {user.email} </span>
    </div>
  )
}

export default UserInfo;