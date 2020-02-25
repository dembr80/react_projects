import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = { username: '' };
    }
    
    mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
    this.setState({username: '' });                       //submit után az érték kiürítése
  }
 
    myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
 
                  
          render() {
                  return (
                    <div className="container">  
                       <div className="form-input">
                         <h1>Form</h1>
                         <form onSubmit={this.mySubmitHandler}>
                            <label>
                            Name:
                            <input type='text'
                                   value={this.state.username}           //kiinduléskor és submit után a username üres=törli a mezőt
                                   onChange={this.myChangeHandler}/>
                           </label>
                           <input type='submit'/>
                         </form>  
                       </div> 
                       <div className="form-output">
                         <h1>Output</h1>
                         <p>Name: {this.state.username}</p>
                       </div>
                    </div>  
                    );
                  }
                }

          ReactDOM.render(<Form />, document.getElementById('root'));
              
          