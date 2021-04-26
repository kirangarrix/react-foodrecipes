import React from 'react';
import './Header.css'
let Header = (props)=>{

    return <div className="header">
        <span className="logo">
            Tell me reciepies
        </span>
        <nav>
            <button onClick={e=>props.onRecipeSelect('Indian')}>Indian</button>
            <button onClick={e=>props.onRecipeSelect('Italian')}>Itaian</button>
        </nav>
    </div> 

};
export default Header;