import React from 'react';

interface ShortCutKeys {
    keys:string[];
}
function Shortcut(props:ShortCutKeys) {
    return(
        <div className='shortcut ml-5 mt-1'>[ &nbsp;
            {
            props.keys.map((element, i, array) => {
                if (array.length - 1 === i) {
                    return <span className='kbd kbd-xs'>{element}</span>
                }
                else {
                    return <span><span className='kbd kbd-xs'>{element}</span> + </span>
                }
            })
        } ]</div>
    )
}

export default Shortcut;