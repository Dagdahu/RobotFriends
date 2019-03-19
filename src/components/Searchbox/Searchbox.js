import React from 'react';

class Searchbox extends React.Component {
    render () {
        return (
            <div>
                <label>
                    Search Robots : 
                    <input
                        className='pa2 ma3' 
                        type='text'
                        placeholder='search'
                        onChange={e => this.props.onSearchChange(e.target.value)}
                    />
                </label>
            </div>
        )
    }
}

export default Searchbox;