import { html, svg } from "lit-html";
import { Shape } from "./shape";

export function Icon() {
  const opts = {
    vertices: 3, // sides
    fill: "var(--group-content-color)",
    size: 15,
    transforms: "translateY(2px)",
  };
  return svg`
      ${Shape(opts)}
    `;
}

export function Avatar() {
  return Shape({ vertices: 22, size: 100, fill: "var(--group-actions-bg)" });
}

export function HeadLine() {
  return html`<h2 class="headline" />`;
}
export function Line(times: number = 1, short?: boolean) {
  return html` ${[...Array(times)].map(
    _ => html`<p class="text ${short ? "text-short" : ""}" />`
  )}`;
}
export function Action() {
  return html` <button>${Line()}</button> `;
}
