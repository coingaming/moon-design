import React, {useEffect, useState} from "react";
import {KBarSearch, useRegisterActions} from "kbar";
import {useRouter} from "next/router";
import navigation from "../../../components/sidebar/navigation";
import styles from "./BarSearch.module.css";

interface KBarItem {
  id: string;
  name: string;
  shortcut: string[];
  keywords: string;
  perform: () => any
}

interface NavigationItem {
  name: string;
  href?: string;
  children?: NavigationItem[]
}

export const BarSearch = () => {
  const [KBarItems, setKBarItems] = useState<KBarItem[]>([]);
  const router = useRouter();

  const parseKBarItem = ({ name, href, children }: NavigationItem): KBarItem[] => {
    let items: KBarItem[] = [];

    items.push({
      id: name.toLowerCase().replace(/ /g, ''),
      name: name,
      shortcut: [name[0].toLowerCase()],
      keywords: name.toLowerCase(),
      perform: () => router.push(href ?? '/404')
    });

    if (children?.length) {
      children.forEach((child) => {
        const flattenedChildren = parseKBarItem(child);

        if (flattenedChildren?.length) {
          flattenedChildren.forEach((flattenedChild) => items.push(flattenedChild));
        }
      });
    }

    return items;
  };

  useRegisterActions(KBarItems, [KBarItems]);

  useEffect(() => {
    const navigationItems: NavigationItem[] = navigation;
    let newKBarItems: KBarItem[] = [];

    navigationItems.forEach((item: NavigationItem) => {
      const flattenedItems = parseKBarItem(item);

      if (flattenedItems?.length) {
        flattenedItems.forEach((flattenedItem) => newKBarItems.push(flattenedItem));
      }
    });

    setKBarItems(newKBarItems.sort((a: KBarItem, b: KBarItem) => a.name > b.name ? 1 : -1))
  }, []);

  return (<KBarSearch className={styles.input}/>);
}
