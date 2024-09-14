import { useReducer } from "react";

// Define the user state type
interface UserState {
  id: string | null;
  fname: string;
  lname: string;
  email: string;
  token: string;
  isAuthenticated: boolean;
}

// Initial state
const initialState: UserState = {
  id: null,
  fname: "",
  lname: "",
  email: "",
  token: "",
  isAuthenticated: false,
};

// Define action types as constants
const SAVE_USER_INFO = "SAVE_USER_INFO";
const UPDATE_USER_INFO = "UPDATE_USER_INFO";
const CLEAR_USER_INFO = "CLEAR_USER_INFO";

// Define action interfaces
interface SaveUserInfoAction {
  type: typeof SAVE_USER_INFO;
  payload: UserState;
}

interface UpdateUserInfoAction {
  type: typeof UPDATE_USER_INFO;
  payload: Partial<UserState>;
}

interface ClearUserInfoAction {
  type: typeof CLEAR_USER_INFO;
}

type UserActionTypes =
  | SaveUserInfoAction
  | UpdateUserInfoAction
  | ClearUserInfoAction;

// Reducer function
const userReducer = (state: UserState, action: UserActionTypes): UserState => {
  console.log("Reducer action:", action); // Log the action to debug
  switch (action.type) {
    case SAVE_USER_INFO:
      console.log("Saving user:", action.payload); // Log payload before saving
      return {
        ...state,
        ...action.payload,
      };

    case UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };

    case CLEAR_USER_INFO:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

// Action creators
const saveUserInfo = (userData: UserState): SaveUserInfoAction => ({
  type: SAVE_USER_INFO,
  payload: userData,
});

const updateUserInfo = (
  updatedData: Partial<UserState>
): UpdateUserInfoAction => ({
  type: UPDATE_USER_INFO,
  payload: updatedData,
});

const clearUserInfo = (): ClearUserInfoAction => ({
  type: CLEAR_USER_INFO,
});

// Hook to use in components
export const useUserReducer = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const saveUser = (userData: UserState) => dispatch(saveUserInfo(userData));
  const updateUser = (updatedData: Partial<UserState>) =>
    dispatch(updateUserInfo(updatedData));
  const clearUser = () => dispatch(clearUserInfo());

  return { state, saveUser, updateUser, clearUser };
};
