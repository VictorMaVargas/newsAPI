import React, { Component } from 'react';
import './Head.scss';
import Nav from './Nav/Nav';
import {userContext} from '../../context/userContext';


class Head extends Component {
  

  render() {
    return (
      <div>
        <Nav/>
        {/* <userContext.Consumer>
              {({user ,logoutUser}) => 
              <>
                <p>User: {user.name}</p>
                <button onClick={logoutUser}>Logout</button>
              </>
              }
        </userContext.Consumer> */}
            
      </div>
    );
  }
}

export default Head;