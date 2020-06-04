import React from 'react'

import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => (
    <form className='form'>
        <input
            className='input'
            type='text'
            placeholder='Type a message...'
            value={message}
            onChange={event => setMessage(event.target.value)}
            onKeyUp={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <bottun className='sendButton' onClick={(event) => sendMessage(event)}>Send</bottun>

    </form>
)

export default Input