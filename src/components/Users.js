import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let usersList = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        <ul>
          {usersList}
        </ul>
          {usersList.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return{
    users: state.users,
    numberOfUsers: state.users.length}
}

export default connect(mapStateToProps)(Users)
