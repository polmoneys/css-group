import { legacy_createStore as createStore } from "redux";
import { matchActionToFn } from "./actions";
import { initialState } from "./initialState";
import { ActionTypes, State } from "./interface";

export function dispatch(
  store: any,
  action: keyof typeof ActionTypes,
  payload?: any
) {
  const fn: any = matchActionToFn(action);
  store.dispatch(fn(payload));
}

function reducer(state: State = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.TOGGLE_THEME:
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };
    case ActionTypes.SET_ORIENTATION:
      return {
        ...state,
        orientation: action.payload,
      };
    case ActionTypes.SET_GROUP:
      return {
        ...state,
        group: action.payload,
      };
    case ActionTypes.SET_VARIANT:
      return {
        ...state,
        variant: action.payload,
      };
    case ActionTypes.SET_VARIANT_PANEL:
      return {
        ...state,
        variantPanel: action.payload,
      };
    default:
      return state;
  }
}
export const store = createStore(reducer);
