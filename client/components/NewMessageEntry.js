import React, { Component } from 'react';
import { postMessage, writeMessage } from '../store';
import {connect} from 'react-redux'

class NewMessageEntry extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form id="new-message-form" onSubmit={this.props.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={this.props.newMessageEntry}
            onChange={this.props.handleChange}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    newMessageEntry: state.newMessageEntry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (evt) => {
      dispatch(writeMessage(evt.target.value))
    },
    handleSubmit: (evt) => {
      evt.preventDefault();
      const { name, newMessageEntry } = this.state;
      const content = newMessageEntry;
      const { channelId } = this.props;
      dispatch(postMessage({ name, content, channelId }));
      dispatch(writeMessage(''));
    }
  }
}

const NewMessageEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry)
export default NewMessageEntryContainer
