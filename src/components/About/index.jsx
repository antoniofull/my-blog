import React from 'react';
import ReactMarkdown from 'react-markdown';

import {aboutText}  from '../../data';

import Thanks from '../../images/thanks.svg';

const padding = {
    padding: '30px'
}

const About = props => (
    <section className='grid-margin' style={padding}>
        <ReactMarkdown source={aboutText} />
        <Thanks />
    </section>
);

export default About;