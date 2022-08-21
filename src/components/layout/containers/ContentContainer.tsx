import React from 'react';
import {Outlet} from "react-router-dom";

function ContentContainer() {
    return (
        <div className='border-2 h-[85vh] md:h-screen mb-[60px] md:mb-0 md:mx-[60px] flex items-center justify-evenly'><Outlet/></div>
    );
}

export default ContentContainer;