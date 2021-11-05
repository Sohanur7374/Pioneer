import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavLink from './NavLink';
const Navbar =()=>{
    
        return (
                                           
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">               
                 <NavLink to="/home" text="Home" active={true} />              
                <NavLink to="/about" text="About" />              
                <NavLink to="/home" text="Service & Package" />                            
                <NavLink to="/gallery" text="Gallery" />                            
                <NavLink to="/home" text="Faq" />                            
                <NavLink to="/home" text="Contact" />  
              </ul>
            </div>
          </div>
          
        </nav>
        );
        
      };
      
export default Navbar;

                                       