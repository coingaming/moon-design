import * as React from "react";
import { Global } from "@emotion/core";
import { styles } from "@heathmont/sportsbet-global";

export const App = () => (
  <main>
    <Global styles={styles} />
    <p>Cashier Test</p>
  </main>
);
