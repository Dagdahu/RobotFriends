import React from 'react';

const robohashURL = 'https://robohash.org/';
const robotSize = '?size=250x250';

const Card = (props) => {
    const {id, name, email} = props.robot;
    return (
        <div className='tc ba bw1 br4 b--gray bg-light-gray ma2 grow dib'>
            <img src={robohashURL + id + robotSize} alt='' />
            <h3 className='dark-blue overflow-y-auto'>
                {name}
            </h3>
            <p>
                {email}
            </p>
        </div>
    )
}

export default Card;