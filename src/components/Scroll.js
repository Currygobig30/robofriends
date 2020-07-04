import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'Scroll', border: '5px solid black', height: '450px', width: '1000px', margin: '30px auto'}}>
            {props.children}
        </div>
    )
};

export default Scroll;