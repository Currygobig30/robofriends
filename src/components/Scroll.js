import React from 'react';

const Scroll = (props) => {
    return (
        <div className="tc">
        <div style={{ overflowY: 'Scroll', border: '5px solid black', height: '500px', width: '800px'}}>
            {props.children}
        </div>
        </div>
    )
};

export default Scroll;