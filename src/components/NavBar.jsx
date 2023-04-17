import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsEnglish } from '../store/slices/isEnglish.slice';

const NavBar = () => {

  const toggleMenu = () => {
    document.getElementById('nav__options-overlay').classList.toggle('nav__options-show')
    document.getElementById('nav-icon3').classList.toggle('open')
  }

  const isEnglish = useSelector(state => state.isEnglish);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="nav">        
        <div className="nav__logo">
          <a href=".">
            <h2><span>{'{'}</span>ab:sa:<span>{'}'}</span></h2>
          </a>
        </div>
        <div className="nav__options">
          <div className="nav__options-overlay" id='nav__options-overlay'>
            <ul>
              <li onClick={toggleMenu}>
                <a href="#home">
                  {isEnglish ? 'Home' : 'Inicio'}
                </a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#skills">
                  {isEnglish ? 'Skills' : 'Habilidades'}
                </a>
              </li>
              {/*<li onClick={toggleMenu} className="technologies__link">
                <a href="#technologies">
                  {isEnglish ? 'Technologies' : 'Tecnologías'}
                </a>
              </li>*/}
              <li onClick={toggleMenu}>
                <a href="#portfolio">
                  {isEnglish ? 'Portfolio' : 'Portafolio'}
                </a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#contact">
                  {isEnglish ? 'Contact' : 'Contacto'}
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__language-option">
            <h2 onClick={() => dispatch(setIsEnglish(!isEnglish))}>
              {isEnglish ? 'ESP' : 'ENG'}
            </h2>
          </div>
          <div className="nav__hamburguer-menu" onClick={toggleMenu}>
            <div id="nav-icon3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;