import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import {connect} from 'react-redux'
import {fetchChannel} from '../store'

class MessageList extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    this.props.handleCurrentChannel(Number(this.props.stuff.match.params.channelId))
  }

  render () {
    const channelId = Number(this.props.stuff.match.params.channelId)
    const messages = this.props.messages
    const filteredMessages = messages.filter(message => message.channelId === channelId);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleCurrentChannel: (id) => {
      dispatch(fetchChannel(id))
    }
  }
}

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList);
export default MessageListContainer
