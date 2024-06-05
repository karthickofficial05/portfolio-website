import React from 'react';
import "./Project.css";
import { FaDice } from "react-icons/fa";
import { GiDrum } from "react-icons/gi";
import { RiTodoLine } from "react-icons/ri";
import { SlCalculator } from "react-icons/sl";


const Projects = () => {
  return (
    
    <div className='container' id='projects'>
   
   <div className='box' >
        <div className='content'>
          <div className='icons'><RiTodoLine /> </div>
            <div className='text'>
                 <h3>TodoList</h3>
                 <p>This project is a simple and intuitive to-do list application built with React. It allows users to add, edit, complete, and delete tasks, with changes saved to local storage for persistent task management. </p>
                 <div className='link-button'>
                    <button ><a href="https://todolistwebapp05.netlify.app">View Live</a></button>
                    <button><a href="https://github.com/karthickofficial05/todolist1">source Code</a></button>
                 </div>
            </div>
        </div>
      </div>

    <div className='box' >
    <div className='content'>
      <div className='icons'><GiDrum /></div>
        <div className='text'>
             <h3>Drums projects</h3>
             <p>This project is an interactive web-based drum kit that lets users play different drum sounds by pressing corresponding buttons or keys on the keyboard. JavaScript handles the sound playback and button animations to create an engaging musical experience. </p>
            <div className='link-button'>
               <button><a href="https://drumskitwebsite.netlify.app">View Live</a></button>
               <button><a href="https://github.com/karthickofficial05/drumswebsite">source Code</a></button>
             </div>
        </div>
    </div>
  </div>

    
      <div className='box' >
        <div className='content'>
          <div className='icons'><FaDice /></div>
            <div className='text'>
                 <h3>Dice Projects</h3>
                 <p>This project is a simple web-based dice game where two players roll virtual dice by refreshing the page, with the winner determined by the higher roll. JavaScript dynamically updates the dice images and announces the winner. </p>
                 <div className='link-button'>
                      <button><a href="https://diceproject05.netlify.app">View Live</a></button>
                      <button><a href="https://github.com/karthickofficial05/dice">source Code</a></button>
                 </div>
            </div>
        </div>
      </div>

      <div className='box' >
        <div className='content'>
          <div className='icons'><SlCalculator /></div>
            <div className='text'>
                 <h3>Calculator projects</h3>
                 <p>This project is a web-based calculator enabling basic arithmetic operations through button clicks and keyboard inputs. JavaScript processes the calculations, while CSS ensures a user-friendly and attractive interface. </p>
                 <div className='link-button'>
                   <button><a href="https://basiccalculator05.netlify.app">View Live</a></button>
                   <button><a href="https://github.com/karthickofficial05/calculator">source Code</a></button>
                </div>
            </div>
        </div>
      </div>     
    </div>
  )
}

export default Projects