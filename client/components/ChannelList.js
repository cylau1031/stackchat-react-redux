import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'


// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

class ChannelList extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { messages, channels } = this.props;

    return (
      <ul>
          {channels.map( channel => {
            return (
              <li key={channel.id}>
                <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                <span>#{channel.name}</span>
                <span className="badge">{ messages.filter(message => message.channelId === channel.id).length }</span>
                </NavLink>
              </li>
            )
          })}
        <li>
        <NavLink to='/new-channel'>Create a channel...</NavLink>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
    messages: state.messages
  }
}


const ChannelListContainer = withRouter(connect(mapStateToProps)(ChannelList))

export default ChannelListContainer
