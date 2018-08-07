import * as React from "react";
import { render } from "react-dom";

import App from "./modules/layout/components/App";

import registerServiceWorker from "./registerServiceWorker";

function main() {
  render(<App />, document.getElementById("root") as HTMLElement);
}

main();

registerServiceWorker();
