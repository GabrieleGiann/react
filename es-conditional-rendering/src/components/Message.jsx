import React from 'react'

const Message = ({age}) => {
    return (
    <p>{age > 18 ? "You are an adult!" : "You are very young!"}</p>
    );
}

export default Message