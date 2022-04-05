import React, { Component } from "react";


class UserCard extends Component {
  render() {
    const { users, usersWhoLikedMovie } = this.props;
    return (
  
         <li> {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (<ul> 
             {usersWhoLikedMovie.map(userId => {
             return <li>{users[userId].name}</li>
             })}
             
             </ul>)}
  
  </li>
       
    
    )
  }
}
export default UserCard;