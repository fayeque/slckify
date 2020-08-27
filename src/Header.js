import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create"
import SearchIcon from "@material-ui/icons/Search";
import {useStateValue} from "./StateProvider";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
function Header({toggleShow}) {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" alt={user && user.displayName} src={user && user.photoURL} />
                <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Dev programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user && user.displayName}
                    </h3>
                </div>
                {/* <CreateIcon /> */}

            </div>
            </div>
        </div>
    )
}

export default Header
