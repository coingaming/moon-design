import React from "react";
import {KBarResults, useMatches} from "kbar";
import styles from "./BarResults.module.css";

export const BarResults = () => {
  const { results } = useMatches();

  return (<div className={styles.wrapper}>
    <KBarResults
      items={results}
      onRender={({ item, active }: { item: any, active: boolean}) =>
        typeof item === "string" ? (<div
          className={`${styles.item} ${active ? styles.activeItem :''}`}
        >{item}</div>) : (<div
          className={`${styles.item} ${active ? styles.activeItem :''}`}
        >{item.name}</div>)}
    />
  </div>)
}
