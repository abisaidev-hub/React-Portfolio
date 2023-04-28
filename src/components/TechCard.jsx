import React from "react";

const TechCard = ({name, img}) => {
  return (
    <li className="tech-card__container" data-aos="fade-up">
      <div className="tech-card__title">
        <p><strong>{name}</strong></p>
      </div>
      <div className="tech-card__img">
        <img src={img} alt="" />
      </div>
    </li>
  );
};

export default TechCard;