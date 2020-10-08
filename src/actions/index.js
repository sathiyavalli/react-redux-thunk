import { ADD_FETCHED_DATA} from './types.js';
import axios from 'axios';
const apiUrl = 'https://my-json-server.typicode.com/sathiyavalli/places/datas';
//action creators

//fetches data from api thunck action creator

export const fetchData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: ADD_FETCHED_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

