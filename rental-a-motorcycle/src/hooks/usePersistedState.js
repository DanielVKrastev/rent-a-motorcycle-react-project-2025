import { useState } from "react";
import { clearUserData, getUserData, saveUserData } from "../utils/userUtils";

export default function usePersistedState(initalState) {
    const [state, setState] = useState(() => {
        const persistedState = getUserData();
        if(!persistedState){
            return initalState;
        }

        return persistedState;
        
    });

    const setPersistedState = (data) => {
        
        if(data){
            saveUserData(data);
        }else{
            clearUserData();
        }

        setState(data);
    }

    return [
        state,
        setPersistedState
    ];
}