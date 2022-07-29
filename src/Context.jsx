// Create a context
// Create a provider
// consumer / useContext Hooks

import React, { useContext, useEffect, useReducer } from "react";
import  reducer  from "./Reducer";

const AppContext = React.createContext();

 const API = "https://thapareactapi.up.railway.app";

const initialState = {
    name: '',
    image: '',
    services: []
}


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

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
    

    // to get the services data

    const getServices = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type: "GET_SERVICES", payload: data});
        } catch (error) {
            console.log(error);
        }
    };

    // to call the API

    useEffect(() => {
        getServices(API)
    }, []);


    return <AppContext.Provider value={{...state, updateHome, updateAbout}}>{children}</AppContext.Provider>
}

// Create Global Context
// gloabal custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
  };

export {AppContext, AppProvider,useGlobalContext}