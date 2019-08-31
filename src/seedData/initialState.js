import uuid from 'uuid';

const initialState = {
  activeTab: {
    type: "channel",
    name: 'general'
  },
  users: [
    {
      username: 'Jillian Hartmann',
      userid: uuid(),
      messages: [
        {
          content: 'Hello',
          date: 123,
          channel: 'general'
        }
      ],
    },
    {
      username: 'Mckayla Steuber',
      userid: uuid(),
      messages: [
        {
          content: 'I need help with this app',
          date: 127,
          channel: 'help'
        },
        {
          content: 'This is confusing!',
          date: 131,
          channel: 'general'
        },
      ],
    },
    {
      username: 'Holden Gusikowski',
      userid: uuid(),
      messages: [
        {
          content: 'React is awesome!',
          date: 129,
          channel: 'react'
        }
      ]
    },
  ],
  channels: [
    {
      channelName: 'general',
      messages: [
        {
          username: 'Jillian Hartmann',
          content: 'Hello',
          date: 123, 
        },
        {
          username: 'Mckayla Steuber',
          content: 'This is confusing!',
          date: 131
        }
      ]
    },
    {
      channelName: 'help',
      messages: [
        {
          username: 'Mckayla Steuber',
          content: 'I need help with this app',
          date: 127
        }
      ]
    },
    {
      channelName: 'react',
      messages: [
        {
          username: 'Holden Gusikowski',
          content: 'React is awesome!',
          date: 123
        }
      ]
    }
  ]
};

export default initialState;