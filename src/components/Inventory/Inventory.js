import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Inventory.css';

import axios from 'axios';

class Inventory extends Component{
    constructor(){
        super()

        this.state = {
            name:"",
            price: 0,
            image: "",
            disabled: true
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDelClick = this.handleDelClick.bind(this);
    }
    
    componentDidMount() {
        let promise = axios.get(`/api/product/${this.props.match.params.shelf}/${this.props.match.params.id}`)
        promise.then( res => {
            this.setState({ name: res.data[0].name, 
                            price: res.data[0].price, 
                            image: res.data[0].image })
        })
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

    handleDelClick(){
        let promise = axios.delete(`/api/product/${this.props.match.params.shelf}/${this.props.match.params.id}`)
        
        // the second axios element in the commented out code below, 
        //   is not needed for axios.delete (also on a axios.get request)
        // ,{shelf: this.props.match.params.shelf, bin: this.props.match.params.id})        
        promise.then( res => {
            // Setting the deleted items on state
            // is not necessary because it's being deleted,
            //    so why the crap would this need to be saved on state if you're
            //      deleting it anyway, dummy?!?!?!
            
            // this.setState({name: res.data[0].name,
            //                price: res.data[0].price,
            //                image: res.data[0].image, })
        })
    }

    handleSaveClick(){
        let promise = axios.put(`/api/product/${this.props.match.params.shelf}/${this.props.match.params.id}`,
        {name: this.state.name, price: this.state.price})
        promise.then( res => {
            this.setState({ name: res.data[0].name, 
                            price: res.data[0].price, 
                            image: res.data[0].image, 
                            disabled: true
            })
         } )
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
                        <img src={this.state.image} alt="" className="bin-img"/>

                        <div className="input-fields">
                            <h2 className="input-label">Name</h2>
                            <input onChange={ (e) => this.handleNameChange( e.target.value ) } 
                                type="text" 
                                className="input-name-box"
                                disabled={this.state.disabled}
                                value={this.state.name}/>
                            <h2 className="input-label">Price</h2>
                            <div className="dollar-symbol">
                                <input onChange={ (e) => this.handlePriceChange( e.target.value ) } 
                                // type="number" 
                                className="input-price-box"
                                disabled={this.state.disabled}
                                value={this.state.price}/>
                            </div>
                        </div>

                        {/* code below is escaped from JSX with curlys for ternary of conditional 
                            render of Edit & Delete buttons or Save & Cancel buttons */}
                        { this.state.disabled === true ?   
                            <div className="inv-btn-wpr">
                                <button onClick={this.handleEditClick} className="inv-edit-btn">Edit</button> 
                                <Link to={`/BinList/${this.props.match.params.shelf}`}>
                                    <button onClick={this.handleDelClick} className="inv-del-btn">Delete</button> 
                                </Link>
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