import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BinList.css';

class BinList extends Component {
    constructor(){
      super()
  
      this.state = {
            listOfBins:["Bin 1", "Bin 2", "Bin 3", "Bin 4"]
        }   
    }
    
    render() {
        let binsList = this.state.listOfBins.map((e,i) => {
        return(
            <Link to={`/Inventory/${i}`} key={i}>   
                <button key={i} className="bin-btn"> {e} </button>
            </Link>    
        )
    })
        
      return (
        <div className="App">
            <div className="hdr2-wrapper">
                <div className="hdr-logo">
                    <img src={require('../Header/logo.png')} alt="shelfie-logo" />   
                </div>    
                <div className="hdr2-nav"> 
                    <Link to='/'>
                        Shelf A
                    </Link>
                </div>
            </div>
            
            <div className='bin-btn-wpr'>
                {binsList}
                <button>+ Add Inventory</button>
            </div>

            
          
        </div>
      );
    }
  }
  
  export default BinList;
