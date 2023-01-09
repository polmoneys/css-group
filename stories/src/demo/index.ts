import { html, render } from "lit-html";
import {
  Groups,
  Orientations,
  Variant,
  VariantPanel,
} from "../store/interface";
import { Card, Group, Panel, Ratio } from "./actions";

interface Params {
  variant: Variant;
  variantPanel: VariantPanel;
  orientation: Orientations;
  group: Groups;
}

export function renderMenu(params: Params) {
  render(Nav(params), document.querySelector<HTMLDivElement>("nav")!);
}

function Nav(params: Params) {
  const isCard = params.group === "card";
  const isPanel = params.group === "panel";

  return html`
    ${Group(params.group)}
    ${isCard ? Card(params.variant) : Card(params.variant, true)}
    ${isCard ? Ratio(params.orientation) : Ratio(params.orientation, true)}
    ${isPanel ? Panel(params.variantPanel) : Panel(params.variantPanel, true)}
  `;
}

export function renderTitle(group: Groups) {
  render(Title(group), document.querySelector<HTMLDivElement>("#title")!);
}

function Title(group: Groups) {
  const description =
    group === "card"
      ? "content with ratio"
      : group === "list"
      ? "items with prefix/sufix actions"
      : "interactive elements";

  return html` <strong>${`${group}:`}</strong> groups ${description}`;
}
