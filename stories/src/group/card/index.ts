import { html, render } from "lit-html";
import { Orientations, Variant } from "../../store/interface";
import { CardUI } from "./skeletons";

export function renderCard(orientation: Orientations, variant: Variant) {
  render(
    Card(orientation, variant),
    document.querySelector<HTMLDivElement>("article")!
  );
}

export function Card(orientation: Orientations, variant: Variant) {
  return html` <div
    class="${orientation === "portrait" ? "fix-portrait-card-height" : ""}"
  >
    <div class="group card card:${orientation}">${CardContent(variant)}</div>
  </div>`;
}

function CardContent(variant: Variant) {
  switch (variant) {
    case "actions":
      return html` ${CardUI.Content()} ${CardUI.Actions()} `;
    case "pic":
      return html` ${CardUI.Pic()}
        <div class="pin-avatar">${CardUI.Avatar()}</div>`;
    case "pic-content":
      return html` ${CardUI.Pic()} ${CardUI.Content()} `;
    case "pic-reorder":
      return html` ${CardUI.Pic()} ${CardUI.Content(true)} `;
    default:
      return html``;
  }
}
