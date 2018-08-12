import React from 'react';
import ReactDOM from 'react-dom';

class addUser extends React.Component {
	   constructor(props) {
	     super(props);
	      this.state = {
	    	name:'',
	    	email:''
	    }
	  this.onChange = this.onChange.bind(this)
	  this.onChangeEmail = this.onChangeEmail.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this)
            
 }

onChange(event){
	this.setState({name: event.target.value});
 }

onChangeEmail(event){
    this.setState({email: event.target.value});
 }

handleSubmit(event){
	var obj={
	 name:this.state.name,
	 email:this.state.email
	}
	this.props.addNewUsers(obj)
	   event.preventDefault();
 }

render(){
   return (
     <div>
  <form onSubmit={this.handleSubmit}>
    <label>
     Name:
     <input type="text" onChange={this.onChange} placeholder="Name"/>
    </label>
    <label>
     Email:
     <input type="text" onChangeEmail={this.onChangeEmail} placeholder="Email"/>
    </label>
  </form>
     </div>
    )
  }

}
export default AddUser;