```js
 export function renderPanelGrid() {
   render(Grid(), document.querySelector<HTMLDivElement>("article")!);
 }
 function Grid() {
   return html` <div class="group grid:md gap:md">
     ${Panel()}${Panel("actions")}${Panel("actions-reorder")}
   </div>`;
 }

```