import React from 'react';
import SettingsTheme from "../../../settings/SettingsTheme";

function PmGeneral() {
    return (
        <>
            <div className='card-title px-4 pt-2'>Algemene instellingen</div>
            <div className='card-body'>
                <div className='font-bold mt-1 mb-2'>Theme:</div>
                <SettingsTheme/>
                <div className='font-bold  mt-5 mb-1'>Language:</div>
            </div>
        </>
    );
}

export default PmGeneral;