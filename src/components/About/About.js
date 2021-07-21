import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about'>
      <div className='about_container'>
        <img
          src='https://ca.slack-edge.com/TPV9DP0N4-U0148FDA1E0-36e9e3bbcdaa-512'
          alt='avatar'
          className='about__pic'
        />
        <div className='about__text'>
          <h2 className='about__text-title'>About the author</h2>
          <p className='about__text-body'>
            I'm Rebecca and I'm a maker. I like long walks on the beach and
            tinkering with open source. I have a passion for developer tools and
            technologies. My latest endeavors include GraphQL, Storybook, and
            Swagger.
          </p>
          <p className='about__text-body'>
            I'm currently 8 months into a mobile app that gamifies self-care for
            remote workers. Feel free to reach out if you want to know more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
