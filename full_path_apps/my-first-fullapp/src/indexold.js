import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
    constructor(props) {                                //konstruktor formailag kötelező a super(props) is
    super(props);
    this.state = { firstname: '',
                    lastname: ''};
    }
    
    mySubmitHandler = (event) => {                        //  =()=> használata miatt konstruktoron kívül és BINDING nem kell
    event.preventDefault();
    alert("You are submitting " + this.state.firstname + ' ' +this.state.lastname);
    this.setState({firstname: '',
                  lastname: ''});                       //submit után az érték kiürítése
  }
 
    myChangeHandler = (event) => {                         // =()=> szintén
    const target = event.target;                           //éppen aktív (event) inputot egységes target véltozóba teszi
    const value= target.value;                             // nevét és értékét változóba veszi ki
    const name = target.name;
        
    this.setState({
                   [name]:value});                        //a változók alapján feltölti a state-et ==> így egy eventhandlerrel kezelhető több input               
  }
 
                  
          render() {
                  return (
                    <div className="container">                               
                       <div className="form-input">
                         <h1>Form</h1>
                         <form onSubmit={this.mySubmitHandler}>                     
                            
                            <label>                                                         
                            First Name:
                            <input      type='text'                                        
                                        name='firstname'                               //elnevezi az inputot-name változóba teszi
                                        value={this.state.firstname}                   //kiinduléskor és submit után a username üres=törli a mezőt
                                        onChange={this.myChangeHandler}/>              
                            </label>
                           <br/>
                           <label>
                           Last Name:
                           <input       type='text'
                                        name='lastname'
                                        value={this.state.lastname}                      
                                        onChange={this.myChangeHandler}/>
                           </label>
                          
                           <input type='submit'/>
                         </form>  
                       </div> 
                       <div className="form-output">
                         <h1>Output</h1>
                         <p>First Name: {this.state.firstname}</p>
                         <p>Last Name: {this.state.lastname}</p>
                       </div>
                    </div>  
                    );
                  }
                }

          ReactDOM.render(<Form />, document.getElementById('root'));