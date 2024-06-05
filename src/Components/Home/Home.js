import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from './profile.png';

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="section__container">
        <div className="content">
          <p className="subtitle">HELLO</p>
          <h1 className="title">
            <span>I'm Karthick<br /></span>
          </h1>
          <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
          <span className="role">
            a <Typewriter
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={['Frontend Developer', 'React developer']}
            />
          </span>
          <p className="description">
            I'm passionate about developing responsive & interactive websites. I have knowledge in HTML5, CSS3, JavaScript, ReactJS, and Bootstrap5.
          </p>
          <div className="action__btns">
            <button>
              <a href="/path-to-your-resume.pdf" className="downloadcv" download>Download CV</a>
            </button>
            <button className="contact">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
        <div className="image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
