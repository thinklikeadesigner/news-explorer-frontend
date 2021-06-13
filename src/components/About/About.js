import React from 'react';
import './About.css';
import avatar from '../../images/avatar.png';

function About() {
  return (
    // <li className={``}>
    <section className='about'>
<div className="about_container">
<img src={avatar} alt='avatar' className='about__pic' />
     <div className="about__text">
       <h2 className='about__text-title'>About the author</h2>
       <p className="about__text-body">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
       <p className="about__text-body">You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
     </div>
</div>
    </section>
  );
}

export default About;
