import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import styles from "./Favorite.module.scss";

const Favorite = ({ liked }) => {
  const [isFavorite, setIsFavorite] = useState(liked);

  const handleClick = () => {
    setIsFavorite((isFavorite) => !isFavorite);
  };

  return (
    <div className={styles["favorite"]}>
      <button onClick={() => handleClick(isFavorite)} aria-label="Favorite">
        {isFavorite ? (
          <MdFavorite
            className={classNames({
              [styles["isFaved"]]: isFavorite,
            })}
          />
        ) : (
          <MdFavoriteBorder />
        )}
      </button>
    </div>
  );
};

Favorite.defaultProps = {
  liked: false,
};

Favorite.propTypes = {
  liked: PropTypes.bool,
};

export default Favorite;
