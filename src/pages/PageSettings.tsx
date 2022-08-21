import React from 'react';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function PageSettings() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <div className='container w-4/6'>
            <h1 className='card-title text-3xl py-3'>
                Settings
            </h1>
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