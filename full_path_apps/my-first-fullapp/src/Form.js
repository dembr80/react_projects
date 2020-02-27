import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props);
    
  }
    
   mySubmitHandler = (event) => {                        //  =()=> használata miatt konstruktoron kívül és BINDING nem kell
    event.preventDefault();
    alert("You are submitting: " + this.props.firstname +' '+ this.props.lastname);
    this.props.clearState();   
                      //submit után az érték kiürítése
  }
 
  myChangeHandler = (event) => {                         // =()=> szintén
    const target = event.target;                           //éppen aktív (event) inputot egységes target véltozóba teszi
    const value= target.value;                             // nevét és értékét változóba veszi ki
    const name = target.name;
    this.props.updateState(name, value);              //a változók alapján feltölti a state-et ==> így egy eventhandlerrel kezelhető több input               
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
                                        value={this.props.firstname}                   //kiinduléskor és submit után a username üres=törli a mezőt
                                        onChange={this.myChangeHandler}/>              
                            </label>
                           <br/>
                           <label>
                           Last Name:
                           <input       type='text'
                                        name='lastname'
                                        value={this.props.lastname}                      
                                        onChange={this.myChangeHandler}/>
                           </label>
                          
                           <input type='submit'/>
                         </form>  
                       </div> 
                       <div className="form-output">
                         <h1>Output</h1>
                         <p>First Name: {this.props.firstname}</p>
                         <p>Last Name: {this.props.lastname}</p>
                       </div>
                    </div>  
                    );
                  } 
                }
                
export default Form;