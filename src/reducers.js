import {
    CHANGE_SEARCHFIELD,
    FETCH_ROBOTS_PENDING,
    FETCH_ROBOTS_SUCCESS,
    FETCH_ROBOTS_FAILURE
} from './constants';

const searchRobotsState = {
    searchField: ''
};

export const searchRobots = (state=searchRobotsState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchField:action.payload})
        default:
            return state;
    }
}


const getRobotsState = {
    pending:false,
    robots:[],
    error:null
};
export const getRobots = (state=getRobotsState, action={}) => {
    switch(action.type) {
        case FETCH_ROBOTS_PENDING:
            return Object.assign({}, state, {
                pending:true,
                error:null
            })
        case FETCH_ROBOTS_SUCCESS:
            return Object.assign({}, state, {
                pending:false,
                robots:action.payload,
                error:null
            })
        case FETCH_ROBOTS_FAILURE:
            return Object.assign({}, state, {
                pending:false,
                robots:[],
                error:action.payload
            })
        default:
            return state;
    }
}
