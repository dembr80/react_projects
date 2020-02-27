import React from "react";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    
 updateState = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  clearState = () => {
    this.setState({
      firstname: "",
      lastname: ""
      
    });
  };

render() {
    return (
      <Form
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        updateState={this.updateState}
        clearState={this.clearState}
      />
    );
  }
}

export default App;
