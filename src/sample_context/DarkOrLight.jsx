import MainContent from "./MainContent";
import TemaContext from "./TemaContext";
import { useState } from 'react';

function DarkOrLight() {

    const [theme,setTheme] = useState('light');
    const temaHandler = () => {
        if(theme !== 'light'){
            setTheme('black')
        }else {
            setTheme('light');
        }
    }
    return (
        <TemaContext.Provider value={{theme, temaHandler}}>
            <MainContent/>
        </TemaContext.Provider>
    )
}

export default DarkOrLight ; 