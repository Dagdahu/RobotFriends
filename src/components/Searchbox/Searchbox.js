import React from 'react';

class Searchbox extends React.Component {
    render () {
        return (
            <input
                className='pa2 ma3' 
                type='text' 
                placeholder='search'
                onChange={e => this.props.onSearchChange(e.target.value)}
            />
        )
    }
}

export default Searchbox;