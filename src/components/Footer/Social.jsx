/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { socialData } from '../../data';

const Social = () => (
  <section className="social social--footer">
    <h3 className="footer-header">Let's be friends</h3>
    <ul>
      {socialData.map(social => (
        <li key={social.id}>
          <a href={social.link}>
            <i className={`${social.style} fa-${social.icon}`} />
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Social;
