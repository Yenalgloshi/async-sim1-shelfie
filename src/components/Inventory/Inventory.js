import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Inventory.css';

class Inventory extends Component{
    constructor(){
        super()

        this.state = {
            name:"",
            price: 0,
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
                    <div className="input-wpr">
                        {/* <img src="https://i.pinimg.com/originals/72/29/93/7229938841528055776886f41f0583ee.jpg" alt="" className="bin-img"/> */}
                        <img src="http://www.qygjxz.com/data/out/50/5582194-cool-wallpapers-for-iphone.png" alt="" className="bin-img"/>

                        <div className="input-fields">
                            <h2 className="input-label">Name</h2>
                            <input onChange={ (e) => this.handleNameChange( e.target.value ) } 
                                type="text" 
                                className="input-name-box"
                                disabled={this.state.disabled}/>
                            <h2 className="input-label">Price</h2>
                            <input onChange={ (e) => this.handlePriceChange( e.target.value ) } 
                                type="number" 
                                className="input-price-box"
                                disabled={this.state.disabled}/>
                        </div>

                        { this.state.disabled === true ? 
                            <div className="inv-btn-wpr">
                                <button onClick={this.handleEditClick} className="inv-edit-btn">Edit</button> 
                                <button onClick={this.handleSaveClick} className="inv-del-btn">Delete</button> 
                            </div>
                            :
                            <div className="inv-btn-wpr">
                                <button onClick={this.handleSaveClick} className="inv-save-btn">Save</button> 
                                <Link to={`/BinList/${this.props.match.params.shelf}`}>
                                    <button className="inv-cncl-btn">Cancel</button> 
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Inventory;