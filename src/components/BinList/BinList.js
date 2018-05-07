import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BinList.css';

class BinList extends Component {
    constructor(){
      super()
  
      this.state = {
            A:[null, "2", null, "4", null],
            B:["1", null, "3", "4", "5"],
            C:["1", "2", null, "4", "5"],
            D:["1", "2", "3", null, "5"]
        }   
    }
    
    render() {
        let binsList = this.state[this.props.match.params.shelf].map((e,i) => {         // shelf is a variable so bracket notation was used 
            console.log(e)
            if(e === null){
                return(
                    <div className="add-inv-btn-wpr">
                        <button key={i} className="add-inv-btn" >+ Add Inventory</button>
                    </div>
                )
            }
            else{
                return(
                <Link to={`/Inventory/${i+1}/${this.props.match.params.shelf}`} key={i}>      
                    <button key={i} className="bin-btn"> Bin {i+1} </button>
                </Link>  
                )  

            }
    })
        
      return (
        <div className="App">
            <div className="hdr2-wrapper">
                <div className="hdr-logo">
                    <Link to={'/'}>
                        <img src={require('../Header/logo.png')} alt="shelfie-logo" />
                    </Link>
                </div>    
                <div className="hdr2-nav"> 
                    <Link to='/'>
                        Shelf {this.props.match.params.shelf}
                    </Link>
                </div>
            </div>
            
            <div className='bin-btn-wpr'>
                {binsList}
            </div>
        </div>
      );
    }
  }
  
  export default BinList;
