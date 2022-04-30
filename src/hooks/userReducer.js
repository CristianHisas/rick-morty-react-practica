import { useReducer } from "react";
import { types } from "../types/types";

function userReducer(InitialStateUsersReducer) {

  const usersReducer = (state, action) => {
    switch (action.type) {
      case types.ADD_USER:
        return {
          ...state,
          users: [...state.users, state.payload],
        };
      case types.LOGOUT_USER:
        return ({
          ...state,
          users: []
        });
      
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(usersReducer, InitialStateUsersReducer);

  return [state, dispatch];
}

export default userReducer;