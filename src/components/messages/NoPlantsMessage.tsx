import React from 'react';

function NoPlantsMessage() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Heya :)</h1>
                    <p className="py-6">There are no plants in your database yet. You can import them from another source or add some new ones!</p>
                    <label htmlFor='cameraFileInput'>
                        <span className="btn btn-sm text-base-100 btn-primary m-2"><i className='material-symbols-rounded mr-2 text-base'>add_circle</i>Add plant</span>
                        <input id='cameraFileInput' type="file" accept="image/*" capture="environment" hidden/>
                    </label>
                    <button className="btn btn-sm text-primary btn-ghost m-2"><i className='material-symbols-rounded mr-2 text-base'>download</i>Import</button>
                </div>
            </div>
        </div>
    );
}

export default NoPlantsMessage;