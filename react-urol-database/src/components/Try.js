import React from 'react';
import mariadb from 'mariadb';



class Try extends React.Component {

  ConnectDB = (event) => {
    alert("Gombnyomás!!!!!")
}  


      
        render() {
            return ( 
              < button onClick = {  this.ConnectDB } > 
                Click
              </button>)
            }

        }

        export default Try;