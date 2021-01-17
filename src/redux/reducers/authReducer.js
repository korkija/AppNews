import {
 AsyncStorage,
} from "react-native";

const SET_AUTH = 'AppNews/authReducer/IS_AUTH';
const SET_ERROR = 'AppNews/authReducer/SET_ERROR';

const initialState = {
  errorMessage: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
      case SET_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export const login =  (value) => async dispatch => {
  if (value.name.toLowerCase()==='admin'&&value.password==='12345'){
    dispatch({type: SET_AUTH, isAuth: true});
    await AsyncStorage.setItem('@saveProfile', 'true');
  }else {
    dispatch({ type: SET_ERROR, errorMessage: "Имя пользователя или пароль введены не верно" });
  }
};

export const setIsAuth = (isAuth) =>  {
    return ({type: SET_AUTH, isAuth: isAuth});
};

export const clearError = () =>  {
    return ({type: SET_ERROR, errorMessage: ''});
};
