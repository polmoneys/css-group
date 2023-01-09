import { html } from "lit-html";
import {
  ActionTypes,
  Groups,
  Orientations,
  Variant,
  VariantPanel,
} from "../store/interface";
import { Shape } from "./shape";
import { store, dispatch } from "../store";

export function Group(group: Groups) {
  const onButtonChange = (event: any) => {
    const nav = event.target.dataset.nav;
    const action = event.target.dataset.option;
    if (nav === "group") {
      dispatch(store, ActionTypes.SET_GROUP, action);
    }
  };

  return html`
    <div class="subnav group gap:md">
      <button
        data-side="bottom"
        data-nav="group"
        data-option="card"
        @click=${{ handleEvent: onButtonChange }}
      >
        ${Shape({
          vertices: 3,
          size: 45,
          transforms: "translateX(10px)",
          fill:
            group === "card"
              ? "var(--accent-error)"
              : "var(--group-actions-color)",
        })}
      </button>
      <button
        data-side="bottom"
        data-nav="group"
        data-option="panel"
        @click=${{ handleEvent: onButtonChange }}
      >
        ${Shape({
          vertices: 4,
          size: 45,
          transforms: "translateX(10px)",
          fill:
            group === "panel"
              ? "var(--accent-error)"
              : "var(--group-actions-color)",
        })}
      </button>
      <button
        data-side="bottom"
        data-nav="group"
        data-option="list"
        @click=${{ handleEvent: onButtonChange }}
      >
        ${Shape({
          vertices: 22,
          size: 45,
          transforms: "translateX(10px)",
          fill:
            group === "list"
              ? "var(--accent-error)"
              : "var(--group-actions-color)",
        })}
      </button>
    </div>
  `;
}

export function Card(variant: Variant, empty?: boolean) {
  const onContentChange = (event: any) => {
    const v = Number(event.target.value);
    if (v === 0) return dispatch(store, ActionTypes.SET_VARIANT, "pic");
    if (v === 5) return dispatch(store, ActionTypes.SET_VARIANT, "pic-content");
    if (v === 10)
      return dispatch(store, ActionTypes.SET_VARIANT, "pic-reorder");
    if (v === 15) return dispatch(store, ActionTypes.SET_VARIANT, "actions");
  };

  const matchVariantToValue = (variant: Variant) => {
    const dict = {
      pic: 0,
      "pic-content": 5,
      "pic-reorder": 10,
      actions: 15,
    };
    return dict[variant];
  };
  if (empty) return html``;

  return html`
    <label>
      <input
        type="range"
        min="0"
        max="15"
        value="${matchVariantToValue(variant)}"
        step="5"
        id="range"
        @input=${{ handleEvent: onContentChange }}
        list="markers"
      />
    </label>
    <datalist id="markers">
      <option value="0"></option>
      <option value="5"></option>
      <option value="10"></option>
      <option value="15"></option>
      <option value="20"></option>
    </datalist>
  `;
}

export function Panel(variant: VariantPanel, empty?: boolean) {
  const onContentChange = (event: any) => {
    const v = Number(event.target.value);
    if (v === 0)
      return dispatch(store, ActionTypes.SET_VARIANT_PANEL, "actions");
    if (v === 10)
      return dispatch(store, ActionTypes.SET_VARIANT_PANEL, "actions-reorder");
    if (v === 20)
      return dispatch(store, ActionTypes.SET_VARIANT_PANEL, "input");
  };

  const matchVariantToValue = (variant: VariantPanel) => {
    const dict = {
      actions: 0,
      "actions-reorder": 5,
      input: 10,
    };
    return dict[variant];
  };
  if (empty) return html``;

  //  class="range-vertical"
  //   orient="vertical"
  return html`
    <label>
      <input
        type="range"
        min="0"
        max="20"
        value="${matchVariantToValue(variant)}"
        step="10"
        id="range"
        @input=${{ handleEvent: onContentChange }}
        list="markers"
      />
    </label>
    <datalist id="markers">
      <option value="0"></option>
      <option value="10"></option>
      <option value="20"></option>
    </datalist>
  `;
}

export function Ratio(orientation: Orientations, empty?: boolean) {
  const onButtonChange = (event: any) => {
    const nav = event.target.dataset.nav;
    const action = event.target.dataset.option;
    if (nav === "ratio") {
      dispatch(store, ActionTypes.SET_ORIENTATION, action);
    }
  };
  if (empty) return html``;
  return html`
    <div class="subnav group gap:md">
      <button
        data-nav="ratio"
        data-option="square"
        @click=${{ handleEvent: onButtonChange }}
      >
        <svg viewBox="0 0 64 64" width="64" height="64">
          <rect
            x="10"
            y="10"
            width="44"
            height="44"
            fill="${orientation === "square"
              ? "var(--accent-error)"
              : "var(--group-actions-color)"}"
            rx="2"
          />
        </svg>
      </button>

      <button
        data-nav="ratio"
        data-option="portrait"
        @click=${{ handleEvent: onButtonChange }}
      >
        <svg viewBox="0 0 64 64" width="64" height="64">
          <rect
            x="10"
            y="6"
            width="44"
            height="52"
            fill="${orientation === "portrait"
              ? "var(--accent-error)"
              : "var(--group-actions-color)"}"
            rx="2"
          />
        </svg>
      </button>

      <button
        data-nav="ratio"
        data-option="landscape"
        @click=${{ handleEvent: onButtonChange }}
      >
        <svg viewBox="0 0 64 64" width="64" height="64">
          <rect
            x="6"
            y="14"
            width="52"
            height="38"
            fill="${orientation === "landscape"
              ? "var(--accent-error)"
              : "var(--group-actions-color)"}"
            rx="2"
          />
        </svg>
      </button>
    </div>
  `;
}
