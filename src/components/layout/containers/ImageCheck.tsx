import React from 'react';

interface ImageCheckProps {
    image?:string;
}

function ImageCheck(props:ImageCheckProps) {
    return (
        <div className='card'>
            <img src={props.image}></img>
        </div>
    );
}

export default ImageCheck;