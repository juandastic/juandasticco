import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import './contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p> I am always willing to hear how can I help and I am always ready to face new challenges </p>
      <ul className="info">
        <li>
          <a className="info-link" href="mailto:juandastic@gmail.com" target="__blank">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            juandastic@gmail.com
          </a>
        </li>
        <li>
          <a className="info-link" href="https://www.linkedin.com/in/juandastic/" target="__blank">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            Juan David Gómez Escobar
          </a>
        </li>
        <li>
          <a className="info-link" href="https://github.com/juandastic" target="__blank">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            juandastic
          </a>
        </li>
        <li>
          <a className="info-link" href="https://twitter.com/juandastic/" target="__blank">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            @juandastic
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
