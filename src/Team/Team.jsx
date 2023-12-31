import {React, useState} from 'react'
import punee from '../assests/punee.png'
import misty from '../assests/misty.png'
import doge from '../assests/doge.png'
import './Team.css'
import Footer from '../Footer/Footer'
import { Form } from 'react-router-dom'

export default function Team() {
    
  return (
    <div>
    <div className='team'> 
        <div className="subteam">
           THE DREAM TEAM
        </div>
        <div className="cont">
          <div className='first-card'>
        <div className="profile">
            <div className='profile-image'><img className="image" src={punee} alt="team"></img></div>
            <div className='text'>
            <h2>Lord Puneet</h2>
            <h4>(designation)</h4>
            </div>
        </div>
        <div className="profile">
          <div className='profile-image'><img className="image" src={punee} alt="team"></img></div>
          <div className='text'>
        <h2>Lord Puneet</h2>
            <h4>(designation)</h4>
          </div>
        </div>
        </div>
        {/* tech divv */}

        <div className='second-cards'>
        <div className="tech-content">
        <h4>Tech Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Cherish</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>
        
         {/* Graphics Team */}
         <div className="tech-content">
        <h4>Graphics Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={misty} alt="img" />
            </div>
            <div className="text">
                    <h4>Misty</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>
        

         {/* Content Team */}
         <div className="tech-content">
        <h4>Content Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Su</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>

         {/* Event team  */}
         <div className="tech-content">
        <h4>Event Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Superstarperstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>
        {/* Sponsorship */}
        <div className="tech-content">
        <h4>Sponsorship Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>


        {/* production */}
        <div className="tech-content">
        <h4>Production Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>

        {/* Decor Team */}
        <div className="tech-content">
        <h4>Decor Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  
  )
}
