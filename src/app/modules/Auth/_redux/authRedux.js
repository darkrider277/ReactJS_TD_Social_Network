import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {put, takeLatest} from 'redux-saga/effects';
import {getUserByToken} from './authCrud';

export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserRequested: '[Request User] Action',
  UserLoaded: '[Load User] Auth API',
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
  refreshToken: undefined,
};

export const reducer = persistReducer(
  {storage, key: 'TanDanJSCv1', whitelist: ['user', 'authToken']},
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const {authToken, refreshToken, user} = action.payload;
        window.localStorage.setItem('accessToken', JSON.stringify(authToken));
        window.localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
        return {authToken, refreshToken, user};
      }

      case actionTypes.Register: {
        const {authToken, refreshToken, user} = action.payload;

        return {authToken, refreshToken, user};
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        window.localStorage.removeItem("accessToken");
        window.localStorage.removeItem("refreshToken");
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        const {user} = action.payload;
        return {...state, user};
      }

      default:
        return state;
    }
  },
);

export const actions = {
  login: payload => ({type: actionTypes.Login, payload}),
  register: payload => ({
    type: actionTypes.Register,
    payload,
  }),
  logout: () => ({type: actionTypes.Logout}),
  requestUser: user => ({type: actionTypes.UserRequested, payload: {user}}),
  fulfillUser: user => ({type: actionTypes.UserLoaded, payload: {user}}),
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    //yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    //yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const {data: user} = yield getUserByToken();

    console.log(user);
    yield put(actions.fulfillUser(user));
  });
}
