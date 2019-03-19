import React from 'react';

class Searchbox extends React.Component {
    render () {
        return (
            <label>
                 
                <input
                    className='pa2 ma3' 
                    type='text'
                    placeholder='search'
                    onChange={e => this.props.onSearchChange(e.target.value)}
                />
            </label>
        )
    }
}

export default Searchbox;