import {
    CHANGE_SEARCHFIELD,
    FETCH_ROBOTS_PENDING,
    FETCH_ROBOTS_SUCCESS,
    FETCH_ROBOTS_FAILURE
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const fetchRobots = () => (dispatch) => {
    dispatch({type: FETCH_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => dispatch({
          type: FETCH_ROBOTS_SUCCESS,
          payload: response
      }))
      .catch(error => dispatch({
          type: FETCH_ROBOTS_FAILURE,
          payload: error
      }))
}