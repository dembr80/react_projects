import React from 'react';

class Column_one extends React.Component{
    render(){
        return(
      <header className="main-header">
        
        <div className="conatiner-fluid">
            <div className="row">
             <div className="navbar">
                 
               <div className="dropdown">
                 <button className="dropbtn">Szolgáltatások
                    <i className="fa fa-caret-down"></i>
                 </button>
                 <div className="dropdown-content">
                    <a href="http://maganrendeles.silvicola.hu/urologia-rendeles/">Urológia</a>
                    <a href="http://maganrendeles.silvicola.hu/neurologia-rendeles-dr-szabo-diana/">Neurológia</a>
                    <a href="http://maganrendeles.silvicola.hu/szolgaltatasok/altalanos-ultrahang-diagnosztika-dr-kovacs-anetta-dr-medra-tibor/">Általános ultrahang</a>
                    <a href="http://maganrendeles.silvicola.hu/honlap-keszites/">Honlap készítés</a> 
                 </div>
                </div>
              
              
              <div className="dropdown">
                 <button className="dropbtn">Munkatársak
                    <i className="fa fa-caret-down"></i>
                 </button>
                 <div className="dropdown-content">
                    <a href="http://maganrendeles.silvicola.hu/dr-nyiri-balazs-urologus-sebesz-szakorvos/">Dr. Nyíri Balázs</a>
                    <a href="http://maganrendeles.silvicola.hu/dr-medra-tibor-radiologus-szakorvos/">Dr. Medra Tibor</a>
                    <a href="http://maganrendeles.silvicola.hu/dr-szabo-diana-neurologus-szakorvos/">Dr. Szabó Diána</a>
                    <a href="http://maganrendeles.silvicola.hu/schmidt-lajos-egeszsegugyi-asszisztens/">Schmidt Lajos</a>
                    <a href="http://maganrendeles.silvicola.hu/munkatarsaink/gumpl-sandor-egeszsegugyi-asszisztens/">Gumpl Sándor</a>
                    <a href="http://maganrendeles.silvicola.hu/pandur-eva-egeszsegugyi-adminisztrator-koordinator/">Pandur Éva</a>
                 </div>
               </div>
              
                <div className="dropdown">
                    <button className="dropbtn">Időpontfoglalás
                    <i className="fa fa-caret-down"></i>
                 </button>
                    <div className="dropdown-content">
                       <a href="tel:+36306967321">tel:+36306967321</a>
                        <a href="http://maganrendeles.silvicola.hu/easyappointments">Foglalási naptár</a>
                </div>
                </div>
                
                                 
                </div>
            </div>
            

            <div className="row">
              
                <div className="col-xs-6" className="logo">
                <img className="logopic" src="/assets/logo.jpg" alt="Logo helye"/>
                </div>
              
                <div className="col-xs-6" className="headerTitle">
                 <h2>Urológia</h2>
                  <h2>Neurológia</h2>
                  <h2>Általános ultrahang</h2>
                  <h2>magánrendelés</h2>
                </div>
             </div>
            
           
            
        <div className="row" className="headContacts">
          <div className="col-xs-12">    
          <p className="pmain">Elérhetőségek:</p>
          <a href="tel:+36306967321" class="pmain">tel.:+36306967321</a><br/>
          <a href="mailto:maganrendeles.silvicola@gmail.com" class="pmain">maganrendeles.silvicola@gmail.com</a>
          </div>
        </div>
    </div>    
            
  </header>
        )
    }
    
}



export default Column_one;