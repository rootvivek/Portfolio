import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
      <>
      {props.details.map((value,index)=>(
          <div className="project-card justify-content-between my-5" key={index}>
              <div className="project-img col-lg-7">
                  <img src={value.img} alt="" />
              </div>
            <div className="project-title col-lg-4 py-3">
                <h3 className='title py-2'>{value.title}</h3>
                <button type="button" className="project_type_1 btn btn-outline-primary rounded me-3">{value.project1}</button>
                <button type="button" className="project_type_2 btn btn-outline-primary rounded">{value.project2}</button>
                <p className='subtitle-1'>{value.subtitle1}</p>
                <p className='subtitle-2'>{value.subtitle2}</p>
                <p className='subtitle-3'>{value.subtitle3}</p>
                <p className='card-btn mt-5'>
                    <Link className="project-btn h5" to={""}>read more</Link>
                </p>
             </div>  
        </div>
        )) }
      </>
  )
}

export default Card;