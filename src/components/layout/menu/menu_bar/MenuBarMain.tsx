import React from 'react';
import '../../../../styles/MenuBar.scss'
import MenuBarItem from "./MenuBarItem";

function MenuBarMain() {
    const menuItems: { link: string; icon: string }[] = [{
        link: '/',
        icon: 'potted_plant',
    },
        {
            link: '/statistics',
            icon: 'bar_chart',
        },
        {
            link: '/profile',
            icon: 'person',
        },
    ]
    return(
        <>
            <div className='flex fixed w-screen bottom-0 flex-row justify-evenly md:flex-col md:h-screen md:w-auto md:justify-center items-center gap-5 p-2'>
            {
                menuItems.map(({link, icon}) => {
                    return <MenuBarItem icon={icon} link={link}/>
                })
            }
            </div>
        </>
    );
}
export default MenuBarMain