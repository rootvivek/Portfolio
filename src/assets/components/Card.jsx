import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
      <>
      {props.details.map((value,index)=>(
          <div className="project-card justify-content-between my-4" key={index}>
              <div className="project-img col-lg-7">
                  <img src={value.img} alt="" />
              </div>
            <div className="project-title col-lg-4 py-2">
                <h3 className='label'>{value.title}</h3>
                <button type="button" className="project_type_1 btn btn-outline-primary rounded me-3">{value.project1}</button>
                <button type="button" className="project_type_2 btn btn-outline-primary rounded me-3">{value.project2}</button>
                <button type="button" className="project_type_2 btn btn-outline-primary rounded me-3">{value.project3}</button>
                <button type="button" className="project_type_2 btn btn-outline-primary rounded">{value.project4}</button>
                <p className='subtitle-1'>{value.subtitle1}</p>
                <p className='subtitle-2'>{value.subtitle2}</p>
                <p className='subtitle-3'>{value.subtitle3}</p>
                <p className='card-btn mt-5'>
                    <Link className="project-btn h5" to={""}>visit link</Link>
                </p>
             </div>  
        </div>
        )) }
      </>
  )
}

export default Card;