// Create a context
// Create a provider
// consumer / useContext Hooks

import React, { useContext, useReducer } from "react";
import  reducer  from "./Reducer";

const AppContext = React.createContext();

const initialState = {
    name: '',
    image: ''
}

const updateHome = () => {
    return dispatch({
        type: 'HOME_UPDATE',
        payload: {
            name: 'Stack Developer',
            image: './images/hero.svg'
        }
    })
}
const updateAbout = () => {
    return dispatch({
        type: 'ABOUT_UPDATE',
        payload: {
            name: 'Stack Developer',
            image: './images/about1.svg'
        }
    })
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{...state, updateHome, updateAbout}}>{children}</AppContext.Provider>
}

// Create Global Context
// gloabal custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
  };

export {AppContext, AppProvider,useGlobalContext}