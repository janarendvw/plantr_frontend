import React from 'react';
import ProfileMenu from "../components/layout/menu/profile_menu/ProfileMenu";
import {Outlet} from "react-router-dom";

function PageProfile() {
    return (
        <div className='grid gap-4 md:grid-cols-3 grid-rows-1 max-w-full'>
            <div className='card col text-base-content shadow p-4'>
                <ProfileMenu/>
            </div>
            <div className='card col-span-2 border border-base-200/40 border-dashed h-full p-4'>
                <Outlet/>
            </div>
        </div>
    );
}

export default PageProfile;