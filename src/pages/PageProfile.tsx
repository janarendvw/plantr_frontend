import React from 'react';
import ProfileMenu from "../components/layout/menu/profile_menu/ProfileMenu";
import {Outlet} from "react-router-dom";

function PageProfile() {
    return (
        <div className='grid gap-4 md:grid-cols-3 grid-rows-1 max-w-full'>
            <div className='card col bg-base-100 border border-white/10 shadow-md'>
                <ProfileMenu/>
            </div>
            <div className='card col-span-2 bg-base-200/20 border border-white/10 h-full'>
                <Outlet/>
            </div>
        </div>
    );
}

export default PageProfile;