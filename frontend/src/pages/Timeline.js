import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';

import './Timeline.css';

import TwitterLogo from '../assets/twitter.svg';

import api from '../services/api'
import Tweet from '../components/Tweet';

export default function Timeline() {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function loadTweets() {
      const io = socketio('http://localhost:3333');
      io.on('tweet', data => {
        setTweets([...tweets, data]);
      })
  
      io.on('like', data => {
        setTweets(tweets.map(tweet => 
          tweet._id === data._id ? data : tweet
        ))
      })
      const response = await api.get('/tweets');
      setTweets(response.data)
    }
    loadTweets();
  }, [tweets])

  async function handleNewTweet(event) {
    if (event.keyCode !== 13) return;

    const content = newTweet;
    const author = localStorage.getItem('@GoTwitter:username');

    await api.post('/tweets', {
      author,
      content
    })

    setNewTweet('');
  }

  return (
    <div className="timeline-wrapper">
      <img src={TwitterLogo} height={24} alt="Twitter Logo"/>
      <form>
        <textarea
          value={newTweet}
          onChange={event => setNewTweet(event.target.value)}
          onKeyDown={handleNewTweet}
          placeholder="O que você está pensando?"
        />
      </form>

      <ul className="tweet-list">
        {tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet}/>
        ))}
      </ul>
    </div>
  );
}
