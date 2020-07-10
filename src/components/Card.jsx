import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className="bg-moon-gray { background-color: #CCCCCC } dib br3 pa3 ma3 grow bw2 shadow-5 tc">
            <img alt="pic" src={`https://robohash.org/${id}?size=100x100`} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;