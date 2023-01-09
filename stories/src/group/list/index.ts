import { html, render } from "lit-html";
import { Shape } from "../../demo/shape";
import { Line } from "../../demo/skeletons";

export function renderList(label: string) {
  render(Grid(label), document.querySelector<HTMLDivElement>("article")!);
}

function Grid(label: string) {
  return List(label);
}

function List(label: string) {
  return html`
    <ul role="list" aria-label=${label} class="group list">
      ${ItemEmpty()} ${ItemEmpty(true)}${ItemEmpty(false, true)}
      ${[...Array(3)].map((_, i) => Item(i))} ${Item(10000, true)}
      ${[...Array(3)].map((_, i) => Item(i + 4))} ${Item(10000, true)}
      ${[...Array(2)].map((_, i) => Item(i + 8))}
    </ul>
  `;
}

function HeadLine() {
  return html`<p class="headline headline-short" />`;
}

function ItemEmpty(start?: boolean, end?: boolean) {
  return html` <li
    class="list-item${start ? "-start" : ""}${end ? "-end" : ""}"
  >
    ${start
      ? html`<div class="start">
          ${Shape({
            vertices: 8,
            size: 24,
            fill: "rgba(0,0,0,.4)",
          })}
        </div>`
      : html``}
    <div>${HeadLine()} ${Line()}</div>
    ${end
      ? html`<div class="end">
          ${Shape({
            vertices: 8,
            size: 24,
            fill: "rgba(0,0,0,.4)",
          })}
        </div>`
      : html``}
  </li>`;
}

function Item(position: number, divider?: boolean) {
  const withBadge = [1, 5];
  const withAction = [1, 2, 3, 5, 7];

  if (divider !== undefined)
    return html`
      <li>
        <div>
          <div class="list:divider">${Line(1, true)}</div>
        </div>
      </li>
    `;

  return html` <li class="list-item-start-end">
    ${html`<div class="start">
      ${Shape({
        vertices: 8,
        size: 24,
        fill: withBadge.includes(position)
          ? "var(--accent-error)"
          : "rgba(0,0,0,.4)",
      })}
    </div>`}
    <div>${HeadLine()} ${Line()}</div>

    ${html`<div class="end">
      ${Shape({
        vertices: 4,
        size: 24,
        fill: [...withAction, ...withBadge].includes(position)
          ? "var(--accent)"
          : "rgba(0,0,0,.4)",
      })}
    </div>`}
  </li>`;
}
