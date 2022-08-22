import React from 'react';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Shortcut from "../components/layout/UI/Shortcut";

function PageSettings() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <div className='container w-4/6'>
            <div className='card-title text-sm'>
                <h1 className='text-3xl py-3'>
                    Settings
                </h1>
                <Shortcut keys={['SHIFT', 'TAB', 'S']}/>
            </div>
            <span>Theme:</span>
            <select data-choose-theme className='select select-sm select-ghost rounded-lg'>
                <option value="emerald">Default</option>
                <option value="forest">Dark</option>
                <option value="lofi">Monochrome</option>
                <option value="synthwave">Futuristic</option>
                <option value="pastel">Breezy</option>
            </select>
       </div>);
}

export default PageSettings;