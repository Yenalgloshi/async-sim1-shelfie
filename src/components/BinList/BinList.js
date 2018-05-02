import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BinList.css';

class BinList extends Component {
    constructor(){
      super()
  
      this.state = {
            listOfBins:["1", "2", "3", "4"]
        }   
    }
    
    render() {
        let binsList = this.state.listOfBins.map((e,i) => {
        return(
            <Link to={`/Inventory/${e}/${this.props.match.params.shelf}`} key={i}>   
                <button key={i} className="bin-btn"> Bin {e} </button>
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
                        Shelf {this.props.match.params.shelf}
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
