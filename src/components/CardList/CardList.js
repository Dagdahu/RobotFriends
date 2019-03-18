import React from 'react';
import Card from '../Card/Card';

const CardList = ({robots}) => {
    /// Map over the robots, and for each, create a Card
    return(
        <div className='tc'>
            {robots.map(robot => <Card key={robot.id} robot={robot} />)}
        </div>
    )
}

export default CardList;