import React from 'react';

import './Tweet.css'

import like from '../assets/like.svg';

export default function Tweet({ tweet }) {
  return (
    <li className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button">
            <img src={like} alt="Like"/>
            {tweet.likes}
        </button>
    </li>
  );
}
