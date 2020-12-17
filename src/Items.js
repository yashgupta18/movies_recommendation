import React from "react";

const Items = ({ person }) => {
  return (
    <div className="section-center">
      {person.map((item) => {
        const { id, name, category, Released, img } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
              </header>
              <p className="item-text">Category: {category}</p>
              <p className="item-text">Released: {Released}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Items;
