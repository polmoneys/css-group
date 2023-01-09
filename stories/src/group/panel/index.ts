import { html, render } from "lit-html";
import { VariantPanel } from "../../store/interface";
import { PanelUI } from "./skeletons";

export function renderPanel(variant?: VariantPanel) {
  render(Panel(variant), document.querySelector<HTMLDivElement>("article")!);
}

function Panel(variant?: VariantPanel) {
  return html` <div class="group panel">${PanelContent(variant)}</div> `;
}

function PanelContent(variant?: VariantPanel) {
  switch (variant) {
    case "actions":
      return html` ${PanelUI.Content()} ${PanelUI.Actions()} `;
    case "actions-reorder":
      return html` ${PanelUI.Content()}${PanelUI.Actions(true)} `;
    case "input":
      return html` ${PanelUI.Content(true, true)} ${PanelUI.Actions()} `;
    default:
      return html` ${PanelUI.Content()}`;
  }
}
