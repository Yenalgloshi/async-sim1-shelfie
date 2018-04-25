import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="Header-element-1">
                    <img src={require('./logo.png')} alt="shelfie-logo" />   
                </div>    
                <div className="Header-element-2"> 
                    SHELFIE
                </div>    
            </div>
        )
    }
}

export default Header;