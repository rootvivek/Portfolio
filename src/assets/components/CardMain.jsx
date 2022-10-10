import React from 'react'
import Card from './Card'
import CardData from './CardData';

function CardMain() {
  return (
       <div className="project">
          <div className="container overflow-hidden">
                <div className="row">                   
                        <h1 className="title ps-3">Explore my best projects</h1>                             
                          <Card details = {CardData}/>
                    </div>
                </div>
            </div>
  )
}

export default CardMain;