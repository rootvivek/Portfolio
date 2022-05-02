import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
      <>
      {props.details.map((value,index)=>(
        <div className="project-card d-flex justify-content-between my-5" key={index}>
            <div className="project-img col-lg-7">
                <img src={value.img} alt="" />
            </div>
            <div className="project-title col-lg-4 py-4">
                <h3 className='title py-2'>{value.title}</h3>
                <p className='subtitle-1'>{value.subtitle1}</p>
                <p className='subtitle-2'>{value.subtitle2}</p>
                <p className='subtitle-3'>{value.subtitle3}</p>
                <p className='project-btn mt-4'>
                    <Link className="project-btn h5" to={""}>Read More</Link>
                </p>
             </div>  
        </div>
        )) }
      </>
  )
}

export default Card;