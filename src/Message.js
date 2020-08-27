import React from 'react';
import "./Message.css";
function Message({msg,timestamp,user,userImage}) {
    return (
        <div className="chat__message">
                <img src={userImage} />
            <div className="chat__messageBody">
                <div className="chat__messageBodyHeader">
                    <h3>{user}- <span className="timespan">{new Date(timestamp && timestamp.toDate()).toUTCString()}</span></h3>
                </div>
                <div className="chat__messageBodyContent">
                    <p>{msg}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
