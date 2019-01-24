import * as React from "react";
import { Global } from "@emotion/core";
import { styles } from "../packages/global/lib";

export default ({ children }) => (
  <main>
    <Global styles={styles} />
    {children}
  </main>
);
