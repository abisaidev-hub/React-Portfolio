import React from 'react';
import ownpicture from '../images/ownpicture.png'
import CV_ENG from '../files/CV_ENG.pdf'
import CV_ESP from '../files/CV_ESP.pdf'
import { useSelector } from 'react-redux';

const Home = () => {

  const downloadCV = () => {
    document.getElementById('download-cv').classList.add('active__download-cv');
    setTimeout(() => {
      document.getElementById('download-cv').classList.remove('active__download-cv');
    }, 3000);
  }

  const isEnglish = useSelector(state => state.isEnglish)

  return (
    <div className="home-body__container">
      <div className='home__container' id='home' data-aos="fade-up">
        <div className="home__presentation">
          <div className="home__presentation-description">
            <div className="home__sqr">
              <div className="home__line-bar"></div>
            </div>
            <h2>{isEnglish ? 'Nice to meet you' : 'Gusto en conocerte'}</h2>
            <h1>{isEnglish ? `I'm Abisai, React Developer` : 'Soy Abisai, Desarrollador React'}</h1>
            <p>{isEnglish ? 'I love challenges and learn something new everyday!' : '¡Me encantan los retos y aprender algo nuevo cada día!'}</p>
          </div>
          <div className="home__contact-media">
            <div className="home__social-media">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/abisaidev" target='_blank'>
                    <i className='bx bxl-linkedin-square bx-md'></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/abisaidev-hub" target='_blank'>
                    <i className='bx bxl-github bx-md' ></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="home__cv">
              <h3>{isEnglish ? 'Download my CV' : 'Descarga mi CV'}</h3>
              <div className="home__cv-both">
                <a href={isEnglish ? CV_ENG : CV_ESP} download onClick={downloadCV}>
                  <h3>{isEnglish ? 'ENG' : 'ESP'}</h3>
                  <div className="home__line-bar"></div>
                </a>
                <a href={isEnglish ? CV_ESP : CV_ENG} download onClick={downloadCV}>
                  <h3>{isEnglish ? 'ESP' : 'ENG'}</h3>
                  <div className="home__line-bar"></div>
                </a>
              </div>
              <div className="pop-up__download-cv" id='download-cv'>
                <p>
                  {isEnglish ? 'Done!' : '¡Listo!'}
                  <br /><br />
                  {isEnglish ? 'Download started' : 'Descarga iniciada'}
                </p>
              </div>
            </div>
          </div>
          <div className="home__profile-picture">
            <img src={ownpicture} alt="" />
            <p>{isEnglish ? 'Hi, its me! :)' : '¡Hola, soy yo! :)'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;