import React from 'react';
import ProfileMenu from "../components/layout/menu/profile_menu/ProfileMenu";
import {Outlet} from "react-router-dom";

function PageProfile() {
    return (
        <div className='grid gap-y-4 md:gap-x-4 grid-cols-1 md:grid-cols-3 grid-rows-1 w-full m-5 md:w-auto md:max-w-full'>
            <div className='col text-base-content w-full'>
                <ProfileMenu/>
            </div>
            <div className='card col-span-2 h-full border border-base-content/10 w-full'>
                <Outlet/>
            </div>
        </div>
    );
}

export default PageProfile;