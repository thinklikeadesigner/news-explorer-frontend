import React from 'react';
import './Footer.css';
import { useHistory, Link } from 'react-router-dom';

export class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__copyright_container'>
            <p className='footer__copyright'>
              © 2021 Supersite, Powered by News API
            </p>
          </div>
          <div className='footer__content'>
            <div className='footer__links_container'>
   
              <Link to='/'>
              <p className='footer__links'>Home</p>
              </Link>
            
              <a href='https://practicum.yandex.com/'>
              <p className='footer__links'>Practicum by Yandex</p>
              </a>
            </div>
            <div className='footer__social-icon_container'>
           
                <a href='https://www.facebook.com/'>
                <div className='footer__social-icon footer__social-icon_facebook ' />
              </a>
              <a href='https://github.com/'>
                <div className='footer__social-icon footer__social-icon_github' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
