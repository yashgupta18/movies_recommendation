import React, { useState } from "react";
import { data } from "./data";
import Items from "./Items";
import Categories from "./Categories";

const allCategory = ["All", ...new Set(data.map((catg) => catg.category))];
const Menu = () => {
  const [categories, setCategories] = useState(allCategory);
  const [menuItems, setMenuItems] = useState(data);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>MOVIES RECOMMENDATION</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Items person={menuItems} />
      </section>
    </main>
  );
};

export default Menu;
