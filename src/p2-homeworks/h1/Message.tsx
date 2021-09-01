import React from 'react'
import s from "./Message.module.css"

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props:MessageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt=""/>
            <div className={s.messageBody}>
                <div className={s.messageContent}>
                    <div className={s.sender}>{props.name}</div>
                    <div className={s.messageText}>{props.message}</div>
                    <div className={s.messageTime}>{props.time}</div>
                </div>
            </div>

        </div>
    )
}

export default Message
