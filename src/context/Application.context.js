import { createContext } from "react";
import { initialState } from "../utils/reducer";

export const ApplicationContext = createContext({
    state: initialState,
    dispatch: () => null
});