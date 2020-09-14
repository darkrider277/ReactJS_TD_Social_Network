import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {put, takeLatest} from 'redux-saga/effects';
import {listConversation} from './chatCrud';

export const actionTypes = {
  ChatGetListConversation: '[Chat] ListConversations',
  ChatGetListConversationRequested: '[Request ListConversations] Action',
};

const initialAuthState = {
  listConversation: undefined,
};

export const reducer = persistReducer({storage, key: 'Chat', whitelist: []}, (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.ChatGetListConversation: {
      const data = action.payload;
      return {listConversation: data};
    }
    case actionTypes.ChatGetListConversationRequested: {
      console.log('vao redux');
      return state;
    }

    default:
      return state;
  }
});

export const actions = {
  ChatGetListConversation: payload => ({type: actionTypes.ChatGetListConversation, payload}),
  ChatGetListConversationRequested: payload => ({type: actionTypes.ChatGetListConversationRequested, payload}),
};

export function* saga() {
  yield takeLatest(actionTypes.ChatGetListConversationRequested, function* listConversationRequested() {
    console.log('ChatGetListConversationRequested');
    const data = yield listConversation();

    if (data.data) {
      yield put(actions.ChatGetListConversation(data.data));
    }
  });
}
