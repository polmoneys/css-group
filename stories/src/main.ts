import { store } from "./store";

import "../../group/dist/group.css";
import "./demo/actions.css";
import "./demo/skeletons.css";
import "./demo/layout.css";

import { renderPanel as panel } from "./group/panel";
import { renderCard as card } from "./group/card";
import { renderList as list } from "./group/list";
import { renderTitle as title, renderMenu } from "./demo";
import { renderCardGrid } from "./group/card/grid";

store.subscribe(loop);

function loop() {
  const { orientation, group, variant, variantPanel } = store.getState();
  title(group);
  renderMenu({
    orientation,
    group,
    variant,
    variantPanel,
  });

  if (group === "card") {
    card(orientation, variant);
    renderCardGrid(orientation, variant);
  }
  if (group === "panel") {
    renderCardGrid(orientation, variant, true);
    panel(variantPanel);
  }
  if (group === "list") {
    renderCardGrid(orientation, variant, true);
    list("list-label");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loop();
});
