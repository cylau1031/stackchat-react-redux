import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannel, postChannel } from '../store';

function NewChannelEntry (props) {
  return (
    <div>
        {/* <h1> PLS WORK </h1> */}
    <form onSubmit={props.handleSubmit}> 
      <div className='form-group'>
        <label htmlFor='name'>Create a Channel</label>
        <input className='form-control' type='text' name='channelName' placeholder='Enter channel name' value={props.newChannelEntry}
            onChange={props.handleChange}/>
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-default'>Create Channel</button>
      </div>
    </form>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        newChannelEntry: state.newChannelEntry
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange: function(evt){
            dispatch(writeChannel(evt.target.value))
        },
        handleSubmit: function(evt){
            evt.preventDefault();
            const name = evt.target.channelName.value;
            //const newChan = postChannel({ name })
            //console.log('hi', dispatch(postChannel({ name })))
            dispatch(postChannel({ name }))
                .then(channel => ownProps.history.push(`/channels/${channel.id}`));
            dispatch(writeChannelName(''))
            
        }
    }
}

const NewChannelContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default NewChannelContainer