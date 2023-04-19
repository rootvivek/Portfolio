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
              <div className="col-5">
                 <div className="project-title">
                    <h4 className='t0'>{value.title}</h4>
                    <ul>
                      <li className='subtitle-1'>{value.subtitle1}</li>
                      <li className='subtitle-2'>{value.subtitle2}</li>
                      <li className='subtitle-3'>{value.subtitle3}</li>
                    </ul>
                      <p className='card-btn mt-5'>
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