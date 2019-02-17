import axios from 'axios';
import {ACTION_TYPES} from '../constants'
// All user actions
export const updateBlocks = () => (dispatch) => {
    dispatch({type: ACTION_TYPES.LOADING_BLOCKS});
    return axios.get(`/api/blocks`)
        .then((response) => {
            console.log(response);
            dispatch({
                type: ACTION_TYPES.LOADING_BLOCKS_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: ACTION_TYPES.LOADING_BLOCKS_ERROR,
                payload: error
            });
        });
};

export const updateBlock = (num) => (dispatch) => {
    dispatch({type: ACTION_TYPES.LOADING_BLOCK});
    return axios.get(`/api/blocks/${num}`)
        .then((response) => {
            console.log('block loaded', response);
            dispatch({
                type: ACTION_TYPES.LOADING_BLOCK_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log('block load error', error);
            dispatch({
                type: ACTION_TYPES.LOADING_BLOCK_ERROR,
                payload: error
            });
        });
};