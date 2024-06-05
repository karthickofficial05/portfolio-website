import React from 'react'
import './Skills.css';
import { FaCalendarAlt } from "react-icons/fa";
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

const Skills = () => {
  return (
    <section className='timeline' id='skills'>
       <div className='timeline-row'>
          <div className='timeline-column'>
            <h2 className='head'>Education</h2>
            <div className='timeline-box'>
                <div className='timeline-content'>
                    <div className='year'><FaCalendarAlt className='i' />2019-2022</div>
                    <h4>Guru Nanak College</h4>
                    <h4 >BCA</h4>
                    <p>CGPA:8.2%</p>
                </div>
                <div className='timeline-content'>
                    <div className='year'><FaCalendarAlt className='i' />2018-2019</div>
                    <h4 className='h4'>Higher secondary School</h4>
                    <h5>Anathavalli Matriculation Hr Sec School</h5>
                    <p>Percentage: 73%</p>
                </div>
                <div className='timeline-content'>
                    <div className='year'><FaCalendarAlt className='i' />2016-2017</div>
                    <h4 className='h4'>Secondary School</h4>
                    <h5>Anathavalli Matriculation Hr Sec School</h5>
                    <p>Percentage: 80%</p>
                </div>
            </div>
          </div>

          <div className='timeline-column'>
            <h2 className='head'>Skills</h2>
                <div className='timeline-box'>
                    <div className='timeline-content'>
                        <h4>HTML5</h4>
                    </div>
                    <div className='timeline-content'>
                        <h4>CSS3</h4>
                    </div>
                    <div className='timeline-content'>
                        <h4>Bootstrap</h4>
                    </div>
                    <div className='timeline-content'>
                        <h4>JavaScript</h4>
                    </div>
                    <div className='timeline-content'>
                        <h4>React</h4>
                    </div>
                
            </div>
          </div>

       </div>
    </section>
  )
}

export default Skills