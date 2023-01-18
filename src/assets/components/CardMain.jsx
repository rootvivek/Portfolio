import React from 'react'
import Card from './Card'
import CardData from './CardData';
import 'animate.css';

function CardMain() {
  return (
       <div className="project">                  
           <h2 className="title mb-5 animate__animated animate__lightSpeedInLeft">Explore my best projects</h2>                             
            <Card details = {CardData} />
        </div>
  )
}

export default CardMain;