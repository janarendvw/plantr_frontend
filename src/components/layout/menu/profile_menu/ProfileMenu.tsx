import React from 'react';
import {Link} from "react-router-dom";

function ProfileMenu() {
    return (
        <ul className="menu menu-compact">
            <li>
                <div className='flex gap-4'>
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
            </li>
            <li>
                <Link to='general-settings'>
                    <i className='material-symbols-rounded text-base ml-3'>settings</i> Algemene instellingen
                </Link>
            </li>
            <li>
                <Link to='profile-settings'>
                    <i className='material-symbols-rounded text-base ml-3'>edit</i> Profiel aanpassen
                </Link>
            </li>
        </ul>
    );
}

export default ProfileMenu;