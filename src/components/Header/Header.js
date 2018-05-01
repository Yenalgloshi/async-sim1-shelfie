import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="hdr-wrapper">
                <div className="hdr-logo">
                    <img src={require('./logo.png')} alt="shelfie-logo" />
                </div>    
                <div className="hdr-element-2"> 
                    SHELFIE
                </div>
            </div>
            
        )
    }
}

export default Header;