import * as React from "react";
import { render } from "react-dom";

import Boot from "./Boot";

import registerServiceWorker from "./registerServiceWorker";

function main() {
  render(<Boot />, document.getElementById("root") as HTMLElement);
}

main();

registerServiceWorker();
