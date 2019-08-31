import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import moment from 'moment';

import initialState from '../seedData/initialState';

class Messanger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: initialState.activeTab,
      users: initialState.users,
      channels: initialState.channels
    };
    this.handleChannelChange = this.handleChannelChange.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
  }


  handleChannelChange(activeTab) {
    this.setState(() => ({ activeTab }));  
  }

  handleChatSubmit({ type, name }, state) {
    let index;
    if (type === 'channel') {
      index = this.state.channels.findIndex(channel => channel.channelName === name);
    } else {
      index = this.state.users.findIndex(user => user.username === name);
    }
    let temp = { ...this.state };
    const message = {
      username: 'Myself',
      content: state,
      date: moment().valueOf()
    };
    temp[`${type}s`][index].messages.push(message);
    this.setState(() => ({ ...temp }));
  }

  render() {
    return (
      <div className="app">
        <Sidebar 
          users={this.state.users} 
          channels={this.state.channels}
          activeTab={this.state.activeTab}
          handleChannelChange={this.handleChannelChange}
        />
        <Chat
          activeTab={this.state.activeTab} 
          users={this.state.users}
          channels={this.state.channels}
          handleChatSubmit={this.handleChatSubmit}
        />
      </div>
    );
  }
}

export default Messanger;