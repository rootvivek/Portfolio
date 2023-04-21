import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
      <>
      {props.details.map((value,index)=>(
        <div className="project-upper">
          <div className="project-card border" key={index}>
            <div className="row">
              <div className="col-7 d-flex">
                <div className="project-img">
                  <img src={value.img} alt="" />
                 </div>
              </div>
              <div className="col-5 pe-5">
                 <div className="project-title">
                  <div className="pro-title d-flex align-item-center">
                     <h4 className='t0'>{value.title}</h4>
                     <p className='pro-title2'>{value.title2}</p>
                  </div>
                    <ul>
                      <li className='subtitle-1'>{value.subtitle1}</li>
                      <li className='subtitle-2'>{value.subtitle2}</li>
                      <li className='subtitle-3'>{value.subtitle3}</li>
                      <li className='subtitle-4'>{value.subtitle4}</li>
                    </ul>
                      <p className='card-btn mt-4'>
                        <Link className="project-btn h5" to={value.vlink} >Explore More</Link>
                      </p>
                  </div>  
               </div>
              </div>
            </div> 
         </div>
        )) }
      </>
  )
}

export default Card;