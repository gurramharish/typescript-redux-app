import * as React from "react";
import { render } from "react-dom";

import App from "./containers/App";

import registerServiceWorker from "./registerServiceWorker";

function main() {
  render(<App />, document.getElementById("root") as HTMLElement);
}

main();

registerServiceWorker();
