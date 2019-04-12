/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURFS,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_SMURFS,
  ADD_SUCCESS,
  ADD_ERROR
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null,
  addingSmurf: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADD_SMURFS:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    case ADD_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
