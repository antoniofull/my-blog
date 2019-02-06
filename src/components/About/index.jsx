import React from 'react';
import ReactMarkdown from 'react-markdown';

import { aboutText, socialData, files, websites } from '../../data';
import img from '../../images/me.png';
import Aside from './AsideContent';

const About = () => (
  <section className="about-section" id="about">
    <article className="about container has-gutter-outside">
      <header>
        <h1 className="freight-sans--bold">Ciao! Nice to meet you!</h1>
      </header>
      <figure>
        <img
          className="about__img"
          src={img}
          alt="Surfing in the Canary Islands"
        />
        <figcaption className="img-caption freight-sans--light">
          Surfing in the Canary Islands. Photo credits:
          <a href="https://surfingtherapy.es">Surfing Therapy</a>
          <div className="img-divider" />
        </figcaption>
      </figure>
      <div className="about__content">
        <ReactMarkdown source={aboutText} />
      </div>
      <aside className="about__links has-shadows">
        <Aside socialData={socialData} files={files} websites={websites} />
      </aside>
    </article>
    <button type="button" className="btn btn--rounded btn--cta btn--about">
      <i className="fas fa-link" />
    </button>
  </section>
);

export default About;
