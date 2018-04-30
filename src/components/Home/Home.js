import React from 'react';
import './Home.css';
import Header from '../Header/Header';

let shelves = ["Shelf A", "Shelf B", "Shelf C", "Shelf D"]
let shelfDisplay = shelves.map((e,i) => {
    return(      
        <button 
          key={i} 
          className="sl-btn">
          {e}
        </button>      
    )
  })

  export default function Home() {
    return (
        <div className="App">
            <Header />
            <div className='sl-1'>
                {shelfDisplay}
            </div>
            
        </div>
    )
}