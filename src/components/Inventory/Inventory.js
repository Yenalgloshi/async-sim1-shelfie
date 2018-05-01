import React, {Component} from 'react';
import './Inventory.css';

class Inventory extends Component{
    render(){
        return(
            <div>
                Inventory Details Page
                <p>This is id: {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Inventory;