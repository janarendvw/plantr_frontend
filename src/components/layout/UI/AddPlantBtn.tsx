import React, {useContext, useEffect, useState} from 'react';
import {PlantContext} from "../../../contexts/PlantContext";
import {useNavigate} from "react-router-dom";

function AddPlantBtn() {
    const navigate = useNavigate()
    const plant = useContext(PlantContext)
    const [imageTaken, setImageTaken] = useState(false)
    useEffect(() => {
        if (imageTaken){
            const input = document.getElementById('uploadImage') as HTMLInputElement;
            const file = window.URL.createObjectURL(input?.files![0])
            plant?.setImage(String(file))
            navigate('/image-check')
        }

    }, [imageTaken]);
    
    return (
        <>
            <label htmlFor='uploadImage'>
                <span className="btn btn-sm text-base-100 btn-primary m-2"><i className='material-symbols-rounded mr-2 text-base'>add_circle</i>Add plant</span>
                <input onChangeCapture={() => {setImageTaken(true)}} id='uploadImage' type="file" accept="image/*" capture="environment" hidden/>
            </label>
        </>
    );
}

export default AddPlantBtn;