import React from 'react';
import Card from '../components/Card'

const CardList = ({ wholelist }) => {
    return (
        <div>
            {
                wholelist.map((user, i) => {
                    return (
                        <Card key={i} id={wholelist[i].id} name={wholelist[i].name} email={wholelist[i].email}/>
                    );
                })
            }
        </div>
    );
}

export default CardList;
