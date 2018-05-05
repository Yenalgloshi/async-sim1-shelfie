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
                    <div className="inv-img">
                        {/* <img src="https://image.freepik.com/free-vector/angry-dragon-silhouette_23-2147510357.jpg" alt="dragon" className="img-1"/> */}
                    </div>
                    <div className="input-wpr">
                        <h2 className="input-label">Name</h2>
                        <input onChange={ (e) => this.handleNameChange( e.target.value ) } type="text" className="input-box"/>
                        <h2 className="input-label">Price</h2>
                        <input onChange={ (e) => this.handlePriceChange( e.target.value ) } type="text" className="input-box"/>
                    </div>
                    <div className="inv-btn-wpr">
                        <button className="inv-btn">Edit</button>
                        <button className="inv-btn">Delete</button>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Inventory;