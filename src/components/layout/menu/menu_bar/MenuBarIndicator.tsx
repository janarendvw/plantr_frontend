import React from 'react';
import '../../../../styles/MenuBar.scss'

interface MenuIndicator {
    active?: boolean;
}

function MenuBarIndicator({active = true}: MenuIndicator) {
    return (
        <div className='bg-primary rounded-full w-4 h-1 md:w-1 md:h-4'></div>
    );
}

export default MenuBarIndicator;