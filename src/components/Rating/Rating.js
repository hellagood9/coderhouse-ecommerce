import React from "react";
import PropTypes from "prop-types";

import { MdStar } from "react-icons/md";

import styles from "./Rating.module.scss";

const Rating = ({ rating }) => {
  return (
    <div className={styles["rating"]}>
      {[...Array(rating)].map((_, i) => (
        <MdStar key={i} />
      ))}
    </div>
  );
};

Rating.defaultProps = {
  rating: 1,
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
