import React from "react";

function C2(props) {
  return(
      <div className="c2 pt-5">
        <h4 className='head-b'>{props.heading}</h4>
              <h4 className='fw-bold'>{props.title}</h4>
              <p>{props.subtitle1}</p>
              <p>{props.subtitle2}</p>
              <p>{props.subtitle3}</p>            
              <img src={props.img} alt="" />
      </div>              
       )
}

export default C2;