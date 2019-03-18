import React from 'react';

const Scroll = (props) => {
    return(
        <div className='overflow-y-scroll h-100'
        >
            {props.children}
        </div>
    )
}

export default Scroll;