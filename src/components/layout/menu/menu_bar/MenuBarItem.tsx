import React from 'react'
import '../../../../styles/MenuBar.scss'
import MenuBarIndicator from "./MenuBarIndicator"
import {Link, useLocation} from "react-router-dom"

interface MenuItem {
    icon?: string
    link: string
}

function MenuBarItem(props:MenuItem) {
    let isActive: boolean = false
    const location = useLocation()

    if (location.pathname.includes(props.link)){
        isActive = true;
    }
    return (
        <>
        {props.link && <Link to={props.link}>
            <div className="flex-col-reverse md:flex-row flex gap-2 items-center justify-center">
                {isActive && <MenuBarIndicator/>}
                <span className={`material-symbols-rounded ${isActive && 'text-primary'}`}>{props.icon}</span>
            </div>
        </Link>}
        </>
    );
}

export default MenuBarItem;