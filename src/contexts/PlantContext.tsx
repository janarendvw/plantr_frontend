import React, { createContext, useState, useEffect } from "react";

// create context
const PlantContext = createContext('');

// @ts-ignore
const PlantContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [plant, setPlant] = useState('');

    // fetch a user from a fake backend API
    useEffect(() => {
        const loadPlant = {
            url: null
        }
        // @ts-ignore
        setPlant(loadPlant)

    }, []);

    return (
        // the Provider gives access to the context to its children
        <PlantContext.Provider value={plant}>
            {children}
        </PlantContext.Provider>
    );
};

export { PlantContext, PlantContextProvider };