import React,{useState,useEffect,useRef} from 'react'
import "./Chat.css";
import {useParams} from "react-router-dom";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput";
import Message from "./Message"
import db from "./firebase";

function Chat() {
    const {roomId} = useParams();
    const [roomDetail,setRoomDetail] = useState(null);
    const [roomMessages,setRoomMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      }

    useEffect(() => {
        if(roomId){
        db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetail(snapshot.data()))

        db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp",'asc')
        .onSnapshot(snapshot => {
            setRoomMessages(snapshot.docs.map(doc => {
                return doc.data();
            }));
            scrollToBottom();
        })
       
    }
    },[roomId])
    
    // setRoomMessages(snapshot.docs.map(doc => doc.data()))


    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetail && roomDetail.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon />
                        Details
                    </p>
                </div>

            </div>
            <div ref={messagesEndRef} className="chat__messages">
                {roomMessages.map((message) => (
                    <Message 
                    msg={message.message}
                    timestamp={message.timestamp}
                    user={message.user}
                    userImage={message.userImage}
                    />
                ))}
            </div>
                    <ChatInput channelName={roomDetail && roomDetail.name} channelId={roomId} />
                    {/* <div ref={messagesEndRef} /> */}
        </div>
    )
}

export default Chat
