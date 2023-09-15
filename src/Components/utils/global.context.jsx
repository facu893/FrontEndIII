import axios from "axios";
import { createContext, useMemo, useReducer, useEffect } from "react";

const actionTypes = {
  TOGGLE_THEME: "TOGGLE_THEME",
  ADD_FAV: "ADD_FAV",
  REMOVE_FAV: "REMOVE_FAV",
  SET_API_DATA: "SET_API_DATA",
};

export const initialState = {
  theme: "light",
  data: [],
  favs: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case actionTypes.ADD_FAV:
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    case actionTypes.REMOVE_FAV:
      return {
        ...state,
        favs: state.favs.filter((dentist) => dentist.id !== action.payload),
      };
    case actionTypes.SET_API_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

 
  const loadDataFromAPI = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = response.data;
      dispatch({ type: actionTypes.SET_API_DATA, payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const contextValue = useMemo(() => {
    return {
      theme: state.theme,
      toggleTheme: () => {
        dispatch({ type: actionTypes.TOGGLE_THEME });
      },
      data: state.data,
      favs: state.favs,
      addUserToFavorites: (dentist) => {
        dispatch({ type: actionTypes.ADD_FAV, payload: dentist });
      },
      removeUserFromFavorites: (dentistId) => {
        dispatch({ type: actionTypes.REMOVE_FAV, payload: dentistId });
      },
      loadDataFromAPI,
    };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
