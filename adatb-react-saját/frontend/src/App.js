import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
            lelet: [], 
            betadat: [],
            inputTAJ: '',
            inputName:''
        }
        //  componentDidMount(){
        //    this.getProducts();
        //   }

    getLelet =(event) => {
         fetch('http://localhost:4000/lelet?taj=' + this.state.inputTAJ)
            .then(response => response.json())
            .then(response => this.setState({ lelet: response.data }))
            .catch(err => console.error(err))
            event.preventDefault();
    }

    renderLelet = ({ taj, lelet }) =>  
    <div key = { taj } >
        <p> { taj } </p> 
        <p> { lelet } </p> 
        
      </div>

      getBetadat =(event) => {
          fetch('http://localhost:4000/betadat?name="'+this.state.inputName+'"')
             .then(response => response.json())
             .then(response => this.setState({ betadat: response.data }))
             .catch(err => console.error(err))
             event.preventDefault();
     }
 
     renderBetadat = ({ nev, szul, cim, taj, anyja, elerhet }) => 
       <div key = { nev } >
         <p> { taj } </p> 
         <p> { nev } </p>
         <p> { elerhet } </p>
         <p> { szul } </p>
         <p> { cim } </p>
      </div>

   render() {
        const { lelet } = this.state;
        const { betadat } = this.state;
        
        return (

            <div className = "App"> 

               { lelet.map(this.renderLelet) }
               { betadat.map(this.renderBetadat) }

               
               <form onSubmit={this.getLelet}>
                 <label>TAJ</label>
                 <input type="text" onChange={e=>this.setState ({inputTAJ:e.target.value})}/>
               </form>

               <form onSubmit={this.getBetadat}>
                 <label>Név</label>
                 <input type="text" onChange={e=>this.setState ({inputName:e.target.value})}/>
               </form>
               

               
           </div>
        );
    }
}

export default App;