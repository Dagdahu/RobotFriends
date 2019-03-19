import React, { Component } from 'react';
import './App.css';

/// Components
import CardList from '../components/CardList/CardList';
import Searchbox from '../components/Searchbox/Searchbox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundry from '../components/ErrorBoundary/ErrorBoundary';
import Header from '../components/Header/Header';

/// Redux
import {connect} from 'react-redux';
import {setSearchField, fetchRobots} from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.getRobots.robots,
    pending: state.getRobots.pending,
    error: state.getRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (newSearchValue) => dispatch(setSearchField(newSearchValue)),
    onRequestRobots: () => dispatch(fetchRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    /// Retrieve from props thanks to redux
    const {searchField, robots, onSearchChange, pending} = this.props;
    /// Filter robots according to searchField
    console.log(robots)
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App tc">
        <div className='dt w-100 bb bw1 b--white pa3 head' style={{height:'15vh'}}>
          <div className='dtc'>
            <Header />
          </div>
          <div className='dtc tr'>
            <Searchbox onSearchChange={onSearchChange}/>
          </div>
        </div>
        <div style={{height:'85vh'}}> 
          {filteredRobots.length ?
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
            :
              <h2 className='tc br2 bg-white gray pa2 dib'>
                
                {pending ? 
                  'Robots are loading...'
                  :
                  'No robot found'
                }
              </h2>
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
