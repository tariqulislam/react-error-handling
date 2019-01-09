import React from 'react';
import UserListJson from './user.json';
import ErrorBoundary from './ErrorBoundary.js';

export class UserList extends React.Component {
  render () {
    return (
      <div>
          {
            UserListJson.map((item, index) => {
              return (  
                <ErrorBoundary key={item.id} debug={true}>
                  <User key={item.id} user={item} />
                </ErrorBoundary>)
            })
          }
      </div>
    )
  }
}

export const User = (props) => {
    return (
      <div style={{
        display: "block",
        width: "200px",
        float: "left",
        height: "200px",
        border: "2px solid lightblue",
        padding: "10px",
        margin: "10px"
      }}>
        <div style={{paddingBottom:'10px'}}>
          Id: {props.user.id}</div>
        <div style={{paddingBottom:'10px'}}>
          Name: {props.user.name}</div>
        <div style={{paddingBottom:'10px'}}>
          Phone: {props.user.phone}
        </div>
        <div style={{paddingBottom:'10px'}}>
          WebSite: {props.user.website.toString()}
        </div>
      </div>
    )
}

export default UserList;