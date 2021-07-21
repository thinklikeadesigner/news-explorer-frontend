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
          <nav className='footer__content'>
            <ul className='footer__links_container'>
              <li className='footer__links-item'>
                <Link className='footer__link' to='/'>
                  <p className='footer__links'>Home</p>
                </Link>
              </li>
              <li className='footer__links-item'>
                <a
                  className='footer__link'
                  href='https://practicum.yandex.com/'
                  target='_'
                  rel='noreferrer'
                >
                  <p className='footer__links'>Practicum by Yandex</p>
                </a>
              </li>
            </ul>
            <ul className='footer__links_container footer__links_container_social'>
              <li className='footer__links-item'>
                <a href='https://www.facebook.com/' target='_' rel='noreferrer'>
                  <div className='footer__social-icon footer__social-icon_facebook ' />
                </a>
              </li>
              <li className='footer__links-item'>
                <a href='https://github.com/' target='_' rel='noreferrer'>
                  <div className='footer__social-icon footer__social-icon_github' />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}
