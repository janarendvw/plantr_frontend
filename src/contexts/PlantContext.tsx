import React, {Dispatch, ReactNode, useEffect, useState} from 'react'

interface PlantContextInterface {
    image: string;
    setImage: Dispatch<any>;
}
const PlantContext = React.createContext<PlantContextInterface | null>(null);

interface Props {
    children?: ReactNode
}

const PlantContextProvider = ({children, ...props}: Props) => {
    const [image, setImage] = useState<string>('')
    useEffect(() => {

    }, [])

    return <PlantContext.Provider value={{
    image, setImage
    }}>
    {children}
    </PlantContext.Provider>
}

export {PlantContext, PlantContextProvider}
