import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddUser from './AddUser'
import ViewUser from './ViewUser'
import db from './db.json'

class App extends React.Component {
     constructor(props) {
    	super(props);
    	this.state = {
    		users:[]
    	}
     this.addNewUsers = this.addNewUsers.bind(this);
     this.viewCurrentUsers = this.viewCurrentUsers.bind(this);	
     this.viewOneUsers = this.viewOneUsers.bind(this);	
     
    }

 addNewUsers(user){
    $ajax({
      url:'/api/users',
      method:'POST',
      success: function(data) {
       console.log(data)
        
    },
      error: function(status,err){
       console.error(status,err.toString());
        }
      })
    }


 viewCurrentUsers(){
    $ajax({
      url:'/api/users',
      method:'GET',
      success: function(data) {
       this.setState({
       	users = data
       })  
    },
      error: function(status,err){
       console.error(status,err.toString());
        }
      })
    } 


 viewOneUser(){
  for(var i = 0; i < this.users.length; i++){
    $ajax({
      url:'/api/users/:id',
      method:'GET',
      success: function(data) {
       this.setState({
       	users[i] = data
       })
        
    },
      error: function(status,err){
       console.error(status,err.toString());
        }
      })
  }
     }



  render(){
    if(this.state.users.length === 0){
        return (
          <div>
             <h1>There Is No Users</h1>
             <button onClick={this.viewCurrentUsers.bind(this)}> My Users</button>
          </div>
    )
     	return (
          <div>
            <button onClick={this.viewCurrentUsers.bind(this)}></button>
            <AddUser addNewUsers={this.addNewUsers}>
            <ViewUser viewCurrentUsers={this.viewCurrentUsers}>
          </div>
               
    )
     	}
     }
   }

ReactDOM.render(<App />, document.getElementById('app'));