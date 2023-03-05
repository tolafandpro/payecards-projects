import { createContext, useLayoutEffect, useReducer, useState } from "react";

const INITIAL_STATE = {
    name: undefined,
    startDates: [],
    endDates: [],
}



export const SearchContext = createContext(INITIAL_STATE)

const SearchReducer = (state, action) => {
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE
            default:
                return state;
    }
}

export const SearchContextProvider = ({children}) => {
    const [lauchDetails, setLauchDetails] = useState();
    const [getLauch, setgetLauch] = useState();
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)

    const getLauchData = async () => {
        try {
            const data = await fetch(`https://api.spacexdata.com/v4/launches?limit=20`)
            .then( async (res) => await res.json())
            
            setgetLauch(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useLayoutEffect(() => {
        getLauchData();
    }, [])


    const getSingleLaunch = async (url) => {
        try {
           const data = await fetch(`https://api.spacexdata.com/v4/launches/${url}`)
            .then((res) => res.json())
            .then((json) => json );


    setLauchDetails(data);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <SearchContext.Provider value={{name: state.name, getLauchData, getLauch, lauchDetails, getSingleLaunch, startDates:state.startDates, endDates: state.endDates, dispatch}}>
        {children}
    </SearchContext.Provider>
    )
    
}