import axios from 'axios';
import socket from '../socket';

const GET_CURRENT_CHANNEL = 'GET_CURRENT_CHANNEL';

export function getCurrentChannel(currentChannel) {
  const action = { type: GET_CURRENT_CHANNEL, currentChannel };
  return action;
}

export function fetchChannel(channelId) {
  return function thunk(dispatch) {
    return axios.get(`/api/channels/${channelId}`)
      .then(res => res.data)
      .then(channel => {
        console.log(channel)
        const action = getCurrentChannel(channel)
        dispatch(action)
      })
  }
}

export default function currentChannelReducer (state = '', action) {
  switch (action.type) {
    case GET_CURRENT_CHANNEL:
      return action.currentChannel
    default:
      return state
  }
}
