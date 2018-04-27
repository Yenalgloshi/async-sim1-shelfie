import React, {Component} from 'react';
import './ShelfList.css';

class ShelfList extends Component{
    constructor(){
        super()

        this.state = {
            shelves:[
                "Shelf A",
                "Shelf B",
                "Shelf C",
                "Shelf D"
            ]
        }   
    }
    render(){ 
        let shelfDisplay = this.state.shelves.map((e,i) => <button key={i} className="sl-btn">{e}</button>)
        return(
            <div className='sl-1'>
                {shelfDisplay}
            </div>
        )
    }
}

export default ShelfList;
