import {
  ActionTypes,
  Orientations,
  Groups,
  Variant,
  VariantPanel,
} from "./interface";

const setOrientation = (newOrientation?: Orientations) => ({
  type: ActionTypes.SET_ORIENTATION,
  payload: newOrientation,
});
const setVariant = (newVariant: Variant) => ({
  type: ActionTypes.SET_VARIANT,
  payload: newVariant,
});

const setVariantPanel = (newVariant: VariantPanel) => ({
  type: ActionTypes.SET_VARIANT_PANEL,
  payload: newVariant,
});
const setGroup = (newGroup: Groups) => ({
  type: ActionTypes.SET_GROUP,
  payload: newGroup,
});
const toggleTheme = () => ({ type: ActionTypes.TOGGLE_THEME });

export const matchActionToFn = (action: keyof typeof ActionTypes) => {
  switch (action) {
    case ActionTypes.SET_ORIENTATION:
      return setOrientation;
    case ActionTypes.TOGGLE_THEME:
      return toggleTheme;
    case ActionTypes.SET_GROUP:
      return setGroup;
    case ActionTypes.SET_VARIANT:
      return setVariant;
    case ActionTypes.SET_VARIANT_PANEL:
      return setVariantPanel;
    default:
      return () => ({});
  }
};
