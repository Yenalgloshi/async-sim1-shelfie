import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="hdr-wrapper">
                    <div className="hdr-logo">
                        <img src={require('./logo.png')} alt="shelfie-logo" />   
                    </div>    
                    <div className="hdr-element-2"> 
                        SHELFIE
                    </div>
                </div>    
            </div>
        )
    }
}

export default Header;