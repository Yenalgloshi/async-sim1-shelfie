import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Inventory.css';

class Inventory extends Component{
    constructor(){
        super()

        this.state = {
            name:"",
            price:"",
            image:""
        }
    }

    handleNameChange(val){
        this.setState({name: val})
    }

    handlePriceChange(val){
        this.setState({price: val})
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
                    <p>Name</p>
                    <input onChange={ (e) => this.handleNameChange( e.target.value ) } type="text" />
                    <p>Price</p>
                    <input onChange={ (e) => this.handlePriceChange( e.target.value ) } type="text" />
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default Inventory;