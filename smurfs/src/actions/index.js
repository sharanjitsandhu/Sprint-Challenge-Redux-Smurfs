/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_SMURFS = "ADD_SMURFS";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  console.log("getSmurfs: ", "Fired!");
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs/")
    .then(result => {
      dispatch({ type: FETCH_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_ERROR, payload: error });
    });
};

export const addSmurf = data => dispatch => {
  //console.log("Fired!");
  dispatch({ type: ADD_SMURFS });
  axios
    .post("http://localhost:3333/smurfs/", data)
    .then(result => {
      dispatch({ type: ADD_SUCCESS, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: ADD_ERROR, payload: error });
    });
};
