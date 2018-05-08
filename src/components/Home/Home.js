import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

let shelves = ["A", "B", "C", "D"]
let shelfDisplay = shelves.map((e,i) => {
    return(
        <Link to={`/BinList/${e}`} key={i}>   
            <button key={i} className="shlf-btn"> Shelf {e} </button>
        </Link>
    )
  })

  export default function Home() {
    return (
        <div className="App">
            <Header />
            <div className='shlf-list'>
                {shelfDisplay}
            </div>
            
        </div>
    )
}