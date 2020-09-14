import axios from 'axios';

export const GLOBAL_URL = process.env.REACT_APP_GLOBAL_URL;

export const LIST_CONVERSATION = '/v1/message';

export const ME_URL = '/v1/user/profile';

export function listConversation() {
  return axios.get(GLOBAL_URL + LIST_CONVERSATION);
}
