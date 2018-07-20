import * as React from "react";
import { render } from "react-dom";

import Boot from "./components/Boot";
import registerServiceWorker from "./registerServiceWorker";

function main(theme: "light" | "dark") {
  render(<Boot {...{ theme }} />, document.getElementById(
    "root"
  ) as HTMLElement);
}

main("light");

// SK: for testing
(window as any).godark = () => {
  main("dark");
};

registerServiceWorker();
