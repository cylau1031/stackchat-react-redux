import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessagesList from './MessagesList';
import NewChannelEntry from './NewChannelEntry';
import store, { fetchMessages, fetchChannels } from '../store';


export default class Main extends Component {

  componentDidMount () {

    store.dispatch(fetchMessages());
    store.dispatch(fetchChannels())
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          <Switch>
            <Route path="/channels/:channelId" component={MessagesList} />
            <Route path='/new-channel' component={NewChannelEntry} />
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}
