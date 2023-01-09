export const ActionTypes = {
  TOGGLE_THEME: "TOGGLE_THEME",
  SET_ORIENTATION: "SET_ORIENTATION",
  SET_GROUP: "SET_GROUP",
  SET_VARIANT: "SET_VARIANT",
  SET_VARIANT_PANEL: "SET_VARIANT_PANEL",
  RESET: "RESET",
} as const;

export type Orientations = "portrait" | "landscape" | "ultrawide" | "square";

export type Groups = "card" | "panel" | "list";

export type Variant = "pic" | "pic-content" | "actions" | "pic-reorder";
export type VariantPanel = "input" | "actions" | "actions-reorder";

export interface State {
  lightTheme: boolean;
  orientation: Orientations;
  group: Groups;
  variant: Variant;
  variantPanel: VariantPanel;
}
