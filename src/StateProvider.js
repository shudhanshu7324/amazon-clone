import React, { createContext, useContext, useReducer } from "react";

// Prepare the datalayer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);


// pull information from the datalayer
export const useStateValue = () => useContext(StateContext);
