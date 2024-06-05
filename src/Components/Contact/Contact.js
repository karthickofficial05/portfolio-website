import React from 'react';
import './Contact.css';
import { IoLocationSharp, IoLogoLinkedin } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact-container">
        <span className="big-circle"></span>
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <div className="info">
              <div className="information">             
                <p><IoLocationSharp /> No:629 Ganga St, Urapakkam, Chennai.</p>
              </div>
              <div className="information">
                <p><MdMarkEmailUnread /> karthickofficial05@gmail.com</p>
              </div>
              <div className="information">
                <p><FaPhoneVolume /> 7904337751</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/karthickofficial05gamil.com?compose=new" target="_blank" rel="noopener noreferrer">
                  < SiGmail  className='mail' />
                </a>
                <a href="https://www.linkedin.com/in/karthick-p-2b1103258" target="_blank" rel="noopener noreferrer">
                  <IoLogoLinkedin className='icons' />
                </a>
                <a href="https://www.instagram.com/xarthicx-p?igsh=M312NzJtZGt1OHBx" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className='icons' />
                </a>
                <a href="https://github.com/karthickofficial05" target="_blank" rel="noopener noreferrer">
                  < FaGithub className='icons' />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <form action="https://formsubmit.co/karthickofficial05@gmail.com" method="POST">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" required />
                <label htmlFor="name">Username</label>      
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" required />
                <label htmlFor="email">Email</label>                
              </div>
              <div className="input-container">
                <input type="number" name="number" className="input" required />
                <label htmlFor="number">Phone</label>                
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" required></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <input type="hidden" name="_replyto" value="karthickofficial05@gmail.com" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="text" name="_honey" style={{display: "none"}} />
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
