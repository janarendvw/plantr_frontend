import React from 'react';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function SettingsTheme() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
            <select data-choose-theme className='select select-sm'>
                <option value="emerald">Default</option>
                <option value="forest">Dark</option>
                <option value="lofi">Monochrome</option>
                <option value="synthwave">Futuristic</option>
                <option value="pastel">Breezy</option>
                <option value="cyberpunk">Cyberpunk</option>
            </select>
    )
}

export default SettingsTheme;