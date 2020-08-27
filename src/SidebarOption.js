import React from 'react'
import "./SidebarOption.css";
import db from "./firebase.js";
import {useHistory} from "react-router-dom";

function SidebarOption({Icon,title,id,addChannelOption}) {
    const history=useHistory();
    const onClick = (e) => {
        addChannelOption ? addChannel() : selectChannel()
    }
    const addChannel = () => {
        var channel=prompt("Enter Room name");

        if(channel){
            db.collection("rooms").add({
                name:channel
            });
        }
    }

    const selectChannel = () => {
        if(id){
            history.push(`/room/${id}`)
        }else{
            history.push(title);
        }
    }
    return (
        <div onClick={onClick} className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h3 className="sidebarOption__channel">{title}</h3>:
            <h3 className="sidebarOption__channel">
                <span className="sidebarOption__hash">#</span>{title}
            </h3>}
        </div>
    )
}

export default SidebarOption
