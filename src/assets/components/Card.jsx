import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
      <>
      {props.details.map((value,index)=>(
        <div className="up">
          <div className="project-card justify-content-between" key={index}>
              <div className="project-img">
                  <img src={value.img} alt="" />
              </div>
              <div className="project-title pt-5">
                <h3 className='label'>{value.title}</h3>
                <ul>
                  <li className='subtitle-1'>{value.subtitle1}</li>
                  <li className='subtitle-2'>{value.subtitle2}</li>
                  <li className='subtitle-3'>{value.subtitle3}</li>
                </ul>
                  <p className='card-btn mt-5'>
                    <Link className="project-btn h5 me-4" to={value.vlink} >Visit Link</Link>
                  </p>
              </div>  
            </div>
            <hr />
        </div>
        )) }
      </>
  )
}

export default Card;