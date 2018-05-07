import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Inventory.css';

class Inventory extends Component{
    constructor(){
        super()

        this.state = {
            name:"",
            price:"",
            image:"",
            disabled: true
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleNameChange(val){
        this.setState({name: val})
    }

    handlePriceChange(val){
        this.setState({price: val})
    }

    handleEditClick(){
        this.setState({disabled: !this.state.disabled})
    }

    handleSaveClick(){
        this.setState({disabled: true})
    }



    render(){
        return(
            <div className="App">
                
                <div className="hdr3-wrapper">
                    <div className="hdr-logo">
                        <Link to={'/'}>
                            <img src={require('../Header/logo.png')} alt="shelfie-logo" />
                        </Link>
                    </div>    
                    <div className="hdr3-shlf-nav"> 
                        <Link to={`/BinList/${this.props.match.params.shelf}`}>
                            Shelf {this.props.match.params.shelf}
                        </Link>
                    </div>
                    <div className="hdr3-bin-nav">
                        Bin {this.props.match.params.id}
                    </div>
                </div>

                <div className="inv-details">
                    <div className="inv-img">
                        {/* <img src="https://image.freepik.com/free-vector/angry-dragon-silhouette_23-2147510357.jpg" alt="dragon" className="img-1"/> */}
                    </div>
                    <div className="input-wpr">
                        <h2 className="input-label">Name</h2>
                        <input onChange={ (e) => this.handleNameChange( e.target.value ) } 
                               type="text" 
                               className="input-box"
                               disabled={this.state.disabled}/>
                        <h2 className="input-label">Price</h2>
                        <input onChange={ (e) => this.handlePriceChange( e.target.value ) } 
                               type="text" 
                               className="input-box"
                               disabled={this.state.disabled}/>
                    </div>
                    
                    { this.state.disabled === true ? 
                        <div className="inv-btn-wpr">
                            <button onClick={this.handleEditClick} className="inv-btn">Edit</button> 
                            <button onClick={this.handleSaveClick} className="inv-btn">Delete</button> 
                        </div>
                        :
                        <div className="inv-btn-wpr">
                            <button onClick={this.handleSaveClick} className="inv-save-btn">Save</button> 
                            <Link to={`/BinList/${this.props.match.params.shelf}`}>
                                <button className="inv-btn">Cancel</button> 
                            </Link>
                        </div>
                    }
                </div>
            
            </div>
        )
    }
}

export default Inventory;