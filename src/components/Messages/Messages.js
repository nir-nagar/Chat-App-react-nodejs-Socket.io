import React from 'react'
import ScrollToBotton from 'react-scroll-to-bottom'
import Message from '../Message/Message'

import './Messages.css'

const Messages = ({ messages, name }) => {
    console.log('<messages-> messages: />', messages)
    console.log('<messages-> is Array />', Array.isArray(messages))
    // console.log('<messages message />', message)
    console.log('<messages-> name: />', name)
    return (
        <ScrollToBotton className='messages'>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBotton>
    )
}

export default Messages