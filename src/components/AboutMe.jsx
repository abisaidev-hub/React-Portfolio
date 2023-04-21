import React from 'react';
import TechCard from './TechCard';
import { useSelector } from 'react-redux';
import { html, css, js, react, reactrouter, redux, bootstrap, nodejs, git, tailwind, postgresql } from '../images';

const AboutMe = () => {

  const isEnglish = useSelector(state => state.isEnglish);

  return (
    <div className="about-me-body__container">
      <div className='about-me__container' id='skills'>
        <div className="about-me__about-me-container fade-in">
          <div className="about-me-container__title">
            <div className="home__sqr">
              <div className="home__line-bar"></div>
            </div>
            <div className="span__title-marked">
              <span>/</span><h2>{isEnglish ? 'BACKGROUND' : 'TRAYECTORÍA'}</h2>
            </div>
          </div>
          {isEnglish ? (
              <p>I have employed technologies such as <b>Javascript</b>, <b>HTML</b>, <b>CSS</b>, and <b>React</b> (<b>React Router</b>, <b>Redux</b>) in the development of projects for this portfolio, which has expanded my skillset in application creation.
              <br /><br />
              Currently, I am focusing on perfecting my skills in <b>React</b> and I am in the process of learning to expand my knowledge in <b>Node</b>.
              <br /><br />
              Furthermore, I am seeking <b>job opportunities</b> that allow me to <b>continue growing and developing professionally</b> in this field.</p>
            ) : (
              <p>He empleado tecnologías como <b>Javascript</b>, <b>HTML</b>, <b>CSS</b> y <b>React</b> (<b>React Router</b>, <b>Redux</b>) en el desarrollo de proyectos para este portafolio, lo que ha ampliado mi conjunto de habilidades en la creación de aplicaciones.
              <br /><br />
              Actualmente, me estoy enfocando en perfeccionar mis habilidades en <b>React</b> y me encuentro en un proceso de aprendizaje para ampliar mi conocimiento en <b>Node</b>.
              <br /><br />
              Asimismo, estoy en busca de <b>oportunidades laborales</b> que me permitan <b>seguir desarrollándome y creciendo profesionalmente</b> en este ámbito.</p>
            )}
        </div>
        <div className="divider-line" id='technologies'></div>
        <div className="about-me__technologies-container fade-in">
          <div className="technologies-container__title">
            <div className="home__sqr">
              <div className="home__line-bar"></div>
            </div>
            <div className="span__title-marked">
              <span>/</span><h2>{isEnglish ? 'TECHNOLOGIES' : 'TECNOLOGíAS'}</h2>
            </div>
          </div>
          <p>{isEnglish ? 'Improving my skills and knowledge with good practices' : 'Mejorando mis habilidades y conocimiento a través de las buenas prácticas'}</p>
          <div className="about-me___technologies-list-container">
            <ul>
              <TechCard
                name='React'
                img={react}
              />
             <TechCard
                name='Redux'
                img={redux}
              />
              <TechCard
                name='Router'
                img={reactrouter}
              />
              <TechCard
                name='Node'
                img={nodejs}
              />
              <TechCard
                name='Javascript'
                img={js}
              />
              <TechCard
                name='Bootstrap'
                img={bootstrap}
              />
              <TechCard
                name='Tailwind'
                img={tailwind}
              />
              <TechCard
                name='CSS'
                img={css}
              />
              <TechCard
                name='HTML'
                img={html}
              />
              <TechCard
                name='GIT'
                img={git}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;