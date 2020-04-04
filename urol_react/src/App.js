import React from 'react';
import Column_one from "./components/Column_one";
import Column_two from "./components/Column_two";
import Column_three from "./components/Column_three";
import './App1.css';

function App() {
    return ( 
      <React.Fragment>
       <Column_one/>
       <Column_two/>  
      </React.Fragment>

    );
}

export default App;