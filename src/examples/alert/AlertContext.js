import React, { useState, useContext, useReducer } from "react";

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }
const reducer = (state, action) => {
    switch (action.type) {
        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    // const [alert, setAlert] = useState(false)

    // const toggle = () => setAlert(prev => !prev)

    useReducer(reducer)
    
    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle
        }}>
            {/* <AlertToggleContext.Provider value={toggle}>
                {children}
            </AlertToggleContext.Provider> */}
            {children}

        </AlertContext.Provider>
    )
}