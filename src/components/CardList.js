import React from 'react';
import Card from '../components/Card'

const CardList = ({ wholelist }) => {

    // test error boundary
    // if (true) {
    //     throw new Error('Something is wrong...fix it!')
    // }

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
