import axios from 'axios'
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types'

export const getItems = ()  => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/items').then(res => 
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    ) 
}
export const addItems = (item) => dispatch => {
    axios.post('/api/items', item)
        .then(res => dispatch({
            type: ADD_ITEMS,
            payload: res.data
        }))
}
export const deleteItems = (id) => dispatch => (
    axios.delete(`/api/items/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEMS,
            payload: id
        }))
)
export const setItemsLoading = () => ({type: ITEMS_LOADING})