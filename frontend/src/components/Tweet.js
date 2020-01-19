import React from 'react';

import './Tweet.css'

import like from '../assets/like.svg';
import api from '../services/api';

export default function Tweet({ tweet }) {
    async function handleLike() {
        const { _id } = tweet;
        await api.post(`/likes/${_id}`);
    }

    return (
        <li className="tweet">
            <strong>{tweet.author}</strong>
            <p>{tweet.content}</p>
            <button type="button" onClick={handleLike}>
                <img src={like} alt="Like"/>
                {tweet.likes}
            </button>
        </li>
    );
}
