import React,{useState,useEffect} from 'react'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase";
import {useStateValue} from "./StateProvider";
import "./Sidebar.css"
import SidebarOption from "./SidebarOption";

function Sidebar() {
    const [channels,setChannels]=useState([]);
    const [{user}] = useStateValue();
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setChannels(
                snapshot.docs.map((doc) => ({
                    id:doc.id,
                    name:doc.data().name
                }))
            )
        })
    },[]);
    return (
        <div className="sidebar">
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption title="Facebook" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption={true} title="Add Channel" />
            
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} addChannelOption={false} />
            ))}
        </div>
    )
}

export default Sidebar
