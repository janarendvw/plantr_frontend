import React from 'react';
import SettingsTheme from "../../../settings/SettingsTheme";

function PmGeneral() {
    return (
        <>
            <div className='badge badge-outline mt-1 mb-2'>Theme:</div>
            <SettingsTheme/>
            <div className='badge badge-outline mt-5 mb-1'>Language:</div>

        </>
    );
}

export default PmGeneral;