import React from 'react';
import "./About.css";
import aboutimg from './aboutimg.jpg'; 

const About = () => {
  return (
    <section className='about' id='about'>
      <h2 className='heading'>About <span className='me'>Me</span> </h2>
      <div className='about-img'>
        <img src={aboutimg} alt="aboutimg" />
      </div>
      <div className='about-content'>
        <h3>Frontend Developer!</h3>
        <p>Hello, I'm Karthick, a dedicated web developer with a passion for crafting seamless and visually appealing user experiences. With a strong foundation in frontend development, I'm actively seeking opportunities for both internships and full-time positions. My daily routine revolves around honing my skills through hands-on practice, tackling diverse projects, and continuously enhancing my problem-solving abilities. I thrive on creating elegant and functional websites that marry aesthetics with functionality. If you're looking for a motivated and adaptable web developer, I'm excited to bring my expertise to your team.</p>
      </div>
    </section>
  )
}

export default About;
