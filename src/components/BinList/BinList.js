import React, {Component} from 'react';
import './BinList.css';

class BinList extends Component {
    constructor(){
      super()
  
      this.state = {
            listOfBins:[
                "Bin 1", 
                "Bin 2", 
                "Bin 3", 
                "Bin 4"
            ]
        }   
    }

 
    
    render() {
        let binsList = this.state.listOfBins.map((e,i) => {
        return(      
            <button 
              key={i} 
              className="bin-btn">
              {e}
            </button>      
        )})
        
      return (
        <div className="App">
            <div className="hdr2-wrapper">
                <div className="hdr-logo">
                    <img src={require('../Header/logo.png')} alt="shelfie-logo" />   
                </div>    
                <div className="hdr2-nav"> 
                    Shelf A
                </div>
            </div>
            
            <div className='hdr-2'>
                {binsList}
                <button id="addInv-btn">+ Add Inventory</button>
            </div>
            
          
        </div>
      );
    }
  }
  
  export default BinList;
