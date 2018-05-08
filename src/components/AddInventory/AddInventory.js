import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AddInventory.css';

class AddInventory extends Component{
    constructor(){
        super()

        this.state = {
            name:"",
            price:0
        }
        this.handleAddInvClick = this.handleAddInvClick.bind(this);
    }

    handleAddNameChange(val){
        this.setState({name: val})
    }

    handleAddPriceChange(val){
        this.setState({price: val})
    }

    handleAddInvClick(){
        this.setState({disabled: !this.state.disabled})
    }

   
    render(){
        return(
            <div className="App">
                
                <div className="hdr4-wrapper">
                    <div className="hdr-logo">
                        <Link to={'/'}>
                            <img src={require('../Header/logo.png')} alt="shelfie-logo" />
                        </Link>
                    </div>    
                    <div className="hdr4-shlf-nav"> 
                        <Link to={`/BinList/${this.props.match.params.shelf}`}>
                            Shelf {this.props.match.params.shelf}
                        </Link>
                    </div>
                    <div className="hdr4-bin-nav">
                        Add To Bin {this.props.match.params.id}
                    </div>
                </div>

                <div className="addInv-details">
                    <div className="addInput-wpr">
                        <h2 className="addInput-label">Name</h2>
                        <input onChange={ (e) => this.handleAddNameChange( e.target.value ) } 
                               type="text" 
                               className="addInput-box"
                               disabled={this.state.disabled}/>
                        <h2 className="addInput-label">Price</h2>
                        <input onChange={ (e) => this.handleAddPriceChange( e.target.value ) } 
                               type="number" 
                               className="addInput-box"
                               disabled={this.state.disabled}/>
                    </div>
                    
                    <div className="addInv-btn-wpr">
                        <Link to={`/BinList/${this.props.match.params.shelf}`}>
                            <button onClick={this.handleAddInvClick} className="addInv-btn">+ Add Inventory</button> 
                        </Link>
                    </div>
                    
                </div>
            
            </div>
        )
    }
}

export default AddInventory;