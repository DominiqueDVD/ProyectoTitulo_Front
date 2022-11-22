import { types } from "../types/types";

const intialState = {
  err: null,
  message: null,
  data: [],
  profile: {
    name: "",
    rut: "",
    email: "",
    password: "",
    id: 0,
    rol: 0,
  },
};

export const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.profileGet:
      return {
        ...state,
        err: false,
        message: "found succesfully",
        data: action.payload,
      };
    case types.profileChoose:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};
