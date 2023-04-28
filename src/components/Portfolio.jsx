import React from 'react';
import ProjectCard from './ProjectCard';
import { html, css, js, react, reactrouter, redux, bootstrap, nodejs, pokedexbg, rickandmortybg, crudusersbg, weatherappbg, ecommercebg } from '../images';
import { useSelector } from 'react-redux';

const Portfolio = () => {

  const isEnglish = useSelector(state => state.isEnglish);

  return (
    <div className="portfolio-body__container">
      <div className='portfolio__container' id='portfolio'>
        <div className="home__sqr" data-aos="fade-right">
          <div className="home__line-bar"></div>
        </div>
        <div className="portfolio__title-and-descritpion" data-aos="fade-right">
          <div className="portfolio__title">
            <div className="span__title-marked">
              <span>/</span><h2>{isEnglish ? 'PORTFOLIO' : 'PORTAFOLIO'}</h2>
            </div>
          </div>
        </div>
        <div className='portfolio__description' data-aos="fade-up">
          <p>{isEnglish ? `Take a look at the latest projects I've done!` : '¡Échale un ojo a los últimos proyectos que he hecho!'}</p>
        </div>
        <div className="portfolio__projects-container">
          <div className="portfolio_projects-webview-container">
            <div className="portfolio__projects-first-container">
            <ProjectCard
                link='https://abisaidev-pokedex-app.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={redux} />
                    <img src={reactrouter} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name='Pokedex'
                description={isEnglish ? 'Characters library with protected routes' : 'Galería de personajes con rutas protegidas'}
                img=
                {
                  <img src={pokedexbg} />
                }
              />
            </div>
            <div className="portfolio__projects-second-container">
            <ProjectCard
                link='https://abisaidev-ecommerce.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={redux} />
                    <img src={reactrouter} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name={isEnglish ? "E-commerce" : "E-commerce"}
                description={isEnglish ? 'Digital market to buy products with user authentication' : 'Tienda digital para comprar productos con autenticación de usuario'}
                img=
                {
                  <img src={ecommercebg} />
                }
              />
              <div className="portfolio__projects-pokedex">
                <ProjectCard
                  link='https://abisaidev-pokedex-app.netlify.app/'
                  technologies=
                  {
                    <>
                      <img src={react} />
                      <img src={redux} />
                      <img src={reactrouter} />
                      <img src={css} />
                      <img src={html} />
                    </>
                  }
                  name='Pokedex'
                  description={isEnglish ? 'Characters library with protected routes' : 'Galería de personajes con rutas protegidas'}
                  img=
                  {
                    <img src={pokedexbg} />
                  }
                />
              </div>
              <ProjectCard
              link='https://abisaidev-rick-and-morty-app.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name='Wiki Rick & Morty'
                description={isEnglish ? 'Characters library made with React' : 'Galería de personajes hecha con React'}
                img=
                {
                  <img src={rickandmortybg} />
                }
              />
            </div>
          </div>
          <div className="divider-line"></div>
          <div className="portfolio__more-projects-container">
            <div className="more-projects__title-and-description" data-aos="fade-right">
              <h3>{isEnglish ? 'More projects' : 'Más proyectos'}</h3>
            </div>
            <div className="more-projects__container" data-aos="fade-up">
              <ProjectCard
                link='https://abisaidev-users-app.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name={isEnglish ? 'Users CRUD' : 'CRUD Usuarios'}
                description={isEnglish ? 'To create, edit and delete users' : 'Para crear, editar y eliminar usuarios'}
                img=
                {
                  <img src={crudusersbg} />
                }
              />
              <ProjectCard
                link='https://abisaidev-weather-app.netlify.app/'
                technologies=
                {
                  <>
                    <img src={react} />
                    <img src={css} />
                    <img src={html} />
                  </>
                }
                name={isEnglish ? 'Weather App' : 'Clima App'}
                description={isEnglish ? 'Weather conditions in real time, based on your localization.' : 'Condiciones del clima en tiempo real, basadas en tu localización'}
                img={
                  <img src={weatherappbg} />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;