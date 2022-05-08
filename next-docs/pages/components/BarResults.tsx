import React from "react";
import {KBarResults, useMatches} from "kbar";

export const BarResults = () => {
  const { results } = useMatches();
console.log('kBarResults > results', results)
  return (<KBarResults
    items={results}
    onRender={({ item, active }: { item: any, active: boolean}) =>
      typeof item === "string" ? (<div>{item}</div>) : (<div
        style={{ background: active ? "#eee" : "transparent" }}
      >{item.name}</div>)}
  />)
}
