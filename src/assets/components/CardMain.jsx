import React from 'react'
import Card from './Card'
import CardData from './CardData';
import 'animate.css';

function CardMain() {
  return (
       <div className="project"> 
        <div className="container">
          <h2 className="t1 mb-5 animate__animated animate__lightSpeedInLeft">Explore my best projects</h2>                             
            <Card details = {CardData} />
          </div>                
        </div>
  )
}

export default CardMain;