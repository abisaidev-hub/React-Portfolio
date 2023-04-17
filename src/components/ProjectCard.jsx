import React from 'react';

const ProjectCard = ({link, technologies, name, description, img}) => {
  return (
    <a href={link} target='_blank' className='project-card__container fade-in'>
      <div className="project-card__technologies-container">
        {technologies}
      </div>
      <div className="project-card__title-and-description">
        <h3>{name}</h3>
        <p><b>{description}</b></p>
      </div>
      <div className="project-card__img">
        {img}
      </div>
    </a>
  );
};

export default ProjectCard;