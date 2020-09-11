import React from "react";
import { NavLink } from "react-router-dom";

import { categories } from "../../data/categories";

import { MdExpandMore } from "react-icons/md";

import styles from "./CategoryList.module.scss";

const CategoryList = () => {
  return (
    <div className={styles["categories"]}>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {Object.entries(categories).map(([family, subCategories]) => {
          return (
            <li key={family} className={styles["nav__list__category"]}>
              <span className={styles["has-sub"]}>
                {family}
                <MdExpandMore />
              </span>

              <div className={styles["nav-dropdown"]}>
                <ul className={styles["nav__list"]}>
                  {subCategories.map((category) => (
                    <li
                      key={category._id}
                      className={styles["nav__list__item"]}
                    >
                      <NavLink
                        to={`/category/${category.slug}`}
                        activeClassName={styles["selected"]}
                      >
                        <img
                          src={`https://globalassets.starbucks.com/assets/${category.imgId}.jpg?impolicy=1by1_tight_288`}
                          alt={category.title}
                        />
                        {category.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
