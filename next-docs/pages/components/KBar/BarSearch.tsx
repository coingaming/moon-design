import React from "react";
import { KBarSearch } from "kbar";
import styles from "./BarSearch.module.css";

export const BarSearch = () => (<div className={styles.wrapper}>
  <KBarSearch className={styles.input}/>
</div>);
