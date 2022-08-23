import React, {useContext} from 'react';
import {PlantContext} from "../../../contexts/PlantContext";

function ImageCheck() {
    const plant = useContext(PlantContext)
    return (
        <div className='card shadow-md hover:md:shadow-xl duration-300 max-w-md ease-in-out m-2'>
            <img src={plant?.image}/>
            <div className='card-body'>
                <div className="card-actions justify-end">
                    <button className="btn btn-ghost btn-sm">
                        <span className='material-symbols-rounded mr-2 text-base'>cancel</span> Annuleren
                    </button>
                    <button className="btn btn-primary btn-sm">
                        <span className='material-symbols-rounded mr-2 text-base'>add_circle</span> Toevoegen
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageCheck;