import React from 'react';
import ReactDOM from 'react-dom';

class ViewUser extends React.Component {
	     constructor(props) {
	    	super(props);
            
	    }
render(){
  	var user = this.props.users;
  	var name = users.name;
  	var email = users.email;
  return (
       <div>
       	 <h1>{users.name}</h1>
       	 <h2>{users.email}</h2>
       </div>
  		)
    }

}
export default ViewUser;