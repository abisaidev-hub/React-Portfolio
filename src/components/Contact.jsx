import React, {useRef} from 'react';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    document.getElementById('confirmation').classList.add('active__email-confirmation');
    setTimeout(() => {
      document.getElementById('confirmation').classList.remove('active__email-confirmation');
    }, 5000);
    emailjs.sendForm('service_tx5kqei', 'template_sl359qj', form.current, 'w34N-uKgyaqNFGB8z')
    .then((result) => {
      //console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset();
  };

  const isEnglish = useSelector(state => state.isEnglish);

  return (
    <div className="contact-body__container">
      <div className='contact__container' id='contact'>
        <div className="contact__description-form-container">
          <div className="contact__description">
            <div className="home__sqr" data-aos="fade-right">
              <div className="home__line-bar"></div>
            </div>
            <div data-aos="fade-right">
              <h2>{isEnglish ? 'Interested in working together?' : '¿Interesado/a en trabajar juntos?'}</h2>
              <h2>{isEnglish ? `Let's talk!` : '¡Hablemos!'}</h2>
            </div>
          </div>
          <div className="contact__form-container">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="name"
                placeholder={isEnglish ? 'Enter your name' : 'Escribe tu nombre'}
                name="user_name"
                required
                data-aos="fade-up"
              />
              <input
                type="email"
                placeholder={isEnglish ? 'Your email address' : 'Tu correo'}
                name="user_email"
                required
                data-aos="fade-up"
              />
              <textarea name="message" id="" cols="30" rows="10" placeholder={isEnglish ? 'Message description' : 'Descripción del mensaje'} required data-aos="fade-up">
              </textarea>
              <button type='submit' id='form-submit' data-aos="fade-up">
                {isEnglish ? 'Contact me' : 'Contáctame'}
                <div className="home__line-bar"></div>
              </button>
            </form>
            <div className="pop-up__email-confirmation" id='confirmation'>
              <p>
                {isEnglish ? 'Thank you for your email!' : '¡Gracias por tu correo!'}
                <br /><br />
                {isEnglish ? 'I will get in contact with you shortly' : 'Me contactaré contigo lo más pronto posible'}
              </p>
            </div>
          </div>
        </div>
        <div className="contact__git-title-contact-container">
          <div className="contact__git-container">
            <div className="home__sqr" data-aos="fade-right">
              <div className="home__line-bar"></div>
            </div>
            <div data-aos="fade-right">
              <h2>{isEnglish ? 'Get in touch with me' : 'Ponte en contacto conmigo'}</h2>
            </div>
          </div>
          <div className="git__contact-media-container" data-aos="fade-up">
            <div className="git__contact-media">
              <h4>EMAIL:</h4>
              <a href="mailto:abisaidev@outlook.com" target='_blank' className='git__contact-link'>
                <h3>abisaidev@outlook.com</h3>
                <div className="home__line-bar"></div>
              </a>
            </div>
            <div className="git__contact-media">
              <h4>WHATSAPP:</h4>
              <a href="http://wa.me/522215910702" target='_blank' className='git__contact-link'>
                <h3>+52 221 591 0702</h3>
                <div className="home__line-bar"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;