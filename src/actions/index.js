import jsonPlaceholder from '../api/jsonPlaceholder'
import _ from 'lodash'

export const fetchPostsAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts()) // Call fetchPost()
    const userIds = _.uniq(_.map(getState().posts, 'userId')) // Get list of Unique userId for each Post// Find all unique userId from list of posts
    // Iterate over unique userId's 
    userIds.forEach(id => {
        dispatch(fetchUser(id))
    });
    // Call fetchUser with each userId
}

// Redux-thunk make it possible to pass async await to a promise to get plain object 
export const fetchPosts = () => async dispatch => {
    // This action creator return a funtion whose argiument is dispatch 
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ // dispatch() function pass an Action as Object 
        type: 'FETCH_POSTS', payload: response.data
    })
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`) // fetch ONE specific user

    dispatch({
        type: 'FETCH_USER', payload: response.data
    })
}


