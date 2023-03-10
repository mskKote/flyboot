import React, { use } from "react";
import { getHotItemsForLanding } from "@/lib/datocms";
import "./styles/slides.css";
import styles from "./styles/slide2.module.css";

import ItemCard from "@/lib/components/item_card";

//* горячие товары
const Slide2 = () => {
  const items = use(getHotItemsForLanding())

  return (
    <section>
      {items.map(item =>
        <ItemCard
          item={item}
          key={item.slug} />)}
    </section>)
}

export default Slide2;
