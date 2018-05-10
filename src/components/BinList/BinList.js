import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './BinList.css';

import axios from 'axios';

class BinList extends Component {
    constructor(){
      super()
  
      this.state = {
            shelfBins:[]
        }   
    }

    componentDidMount() {
        axios.get(`/api/bins/${this.props.match.params.shelf}`).then( response => {
            console.log(response.data)                             // response.data an array of objects
            let bins = response.data.map((obj) => obj.bin)         // map over response.data and put bin numbers in a new array
            let newBinArray = Array(5).fill(null).map((e, i) => {  // create array w/ only 5 elements and fill each with null then map over
                if(bins.includes(i+1)){                            // checks to see if an element has a number
                  return i+1                                       // returns the number
                }
                else{
                  return null;                                     // else puts a null in the element index
                }
              })
          this.setState({ shelfBins: newBinArray });               // puts the newBinArray on state
        });
      }

    render() {
        let binsList = this.state.shelfBins.map((e,i) => {         // shelf is a variable so bracket notation was used 
            if(e === null){
                return(
                    <div className="add-inv-btn-wpr">
                        <Link to={`/AddInventory/${this.props.match.params.shelf}/${i+1}`} key={i}>      
                            <button key={i} className="add-inv-btn"> + Add Inventory </button>
                        </Link>
                    </div>
                )
            }
            else{
                return(
                    <Link to={`/Inventory/${this.props.match.params.shelf}/${i+1}`} key={i}>      
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
