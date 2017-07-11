// import {INITIAL, GET_USER} from '../actions';
import {FETCH_REQUEST,FETCH_USERS_SUCCESS,FETCH_USER_SUCCESS,FETCH_ERROR} from '../actions';
const initialState = {
  users: [],
  loading: false,
  error: null,
  userName: null,
  id: null,
  quizzes: null
};

export default (state=initialState, action) => {
  // if(action.type === INITIAL) {
  //   return Object.assign({}, state, {
  //     users: [{id: 1, userName: 'admin'}, {id: 2, userName: 'pass'}, {id: 3, userName: 'fail'}]
  //   });
  // }else if(action.type === GET_USER) {
  //   const userId = action.username;
  //   return Object.assign({}, state, {
  //     userId
  //   })
  // }
  if(action.type === FETCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }else if (action.type === FETCH_USERS_SUCCESS) {
    return Object.assign({}, state, {
      users: action.users,
      loading: false,
      error: null
    });
  }else if (action.type === FETCH_USER_SUCCESS) {
    const userName = action.user.userName;
    const id = action.user.id;
    const quizzes = action.user.quizzes;
    return Object.assign({}, state, {
      userName,
      id,
      quizzes
    });
  }else if (action.type === FETCH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;


}