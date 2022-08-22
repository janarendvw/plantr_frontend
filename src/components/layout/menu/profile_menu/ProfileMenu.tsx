import React from 'react';
import {Link} from "react-router-dom";

function ProfileMenu() {
    return (
        <>
        <div className='card flex-row gap-4 p-4'>
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src="https://thispersondoesnotexist.com/image"/>
                </div>
            </div>
            <div className='flex flex-col'>
                <span>Gerard Wagenaar</span>
                <span className='text-xs opacity-50'>g.wagenaar@gmail.com</span>
            </div>
        </div>
        <ul className="menu menu-compact mt-3">
            <li>
                <Link to='general-settings'>
                    <i className='material-symbols-rounded text-base'>settings</i> Algemene instellingen
                </Link>
            </li>
            <li>
                <Link to='profile-settings'>
                    <i className='material-symbols-rounded text-base'>edit</i> Profiel aanpassen
                </Link>
            </li>
        </ul>
        </>
    );
}

export default ProfileMenu;