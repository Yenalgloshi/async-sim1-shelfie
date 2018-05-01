import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

let shelves = ["Shelf A", "Shelf B", "Shelf C", "Shelf D"]
let shelfDisplay = shelves.map((e,i) => {
    return(
        <Link to={`/BinList/${i}`} key={i}>   
            <button key={i} className="sl-btn"> {e} </button>
        </Link>
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