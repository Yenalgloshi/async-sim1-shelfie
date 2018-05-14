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
        // The response.data of the axios request is an array of objects.
        // If the shelf is not full, the resulting array will only have those
        //   elements resulting in an array that has less than 5 items.
        axios.get(`/api/bins/${this.props.match.params.shelf}`).then( response => {
            // console.log(response.data)                             
            // map over response.data and put bin numbers in a new array
            let bins = response.data.map((obj) => obj.bin)         
            // create a new array w/ 5 elements and fill each with null then map over
            let newBinArray = Array(5).fill(null).map((e, i) => {  
                // checks to see if an element has a number
                if(bins.includes(i+1)){                          
                // returns the number
                  return i+1                                       
                }
                // else puts a null in the element index
                else{
                  return null;                                     
                }
              })
            // puts the newBinArray on state
          this.setState({ shelfBins: newBinArray });               
        });
      }

    render() {                                                     
        // this maps over the array on state and creates the bin list
        //   with Add Inv for null items in the array
        let binsList = this.state.shelfBins.map((e,i) => {         
            if(e === null){
                return(
                    <div className="add-inv-btn-wpr" key={"empty"+i}>
                        <Link to={`/AddInventory/${this.props.match.params.shelf}/${i+1}`} >      
                            <button className="add-inv-btn"> + Add Inventory </button>
                        </Link>
                    </div>
                )
            }
            else{
                return(
                    <Link to={`/Inventory/${this.props.match.params.shelf}/${i+1}`} key={"full"+i}>      
                        <button className="bin-btn"> Bin {i+1} </button>
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
