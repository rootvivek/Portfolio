import React from 'react'
import Card from './Card'
import CardData from './CardData';

function CardMain() {
  return (
    <div>
        <div className="project">
            <div className="container overflow-hidden">
                <div className="row">                   
                    <div className="col">
                        <h1 className="main-title ps-3">Selected Works</h1>                             
                          <Card details = {CardData}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardMain;