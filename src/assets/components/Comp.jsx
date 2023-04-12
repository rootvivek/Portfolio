import React from "react";

function Comp(props){
    return(
        <>
        {props.details.map((value,index)=>(
          <div className="comp-main">
             <div class="sidenav border">
                <ul>
                  <li>{value.li1}</li>
                  <li>{value.li2}</li>
                  <li>{value.li3}</li>
                  <li>{value.li4}</li>
                  <li>{value.li5}</li>
                  <li>{value.li6}</li>
                  <li>{value.li7}</li>
                  <li>{value.li8}</li>
                </ul>
            </div>
            <div className="container">
                    <div className="p-main ps-5">
                      <div className="pt1">
                        <div className="col-7">
                          <h1 className='t1 fw-bold fs-1 mt-5'>{value.title1}</h1>
                          <h5 className='t1'>{value.subtitle1}</h5>
                          <p className='my-3'>{value.subtitle2}</p>
                          <p className="">{value.subtitle3}</p>
                        </div>
                      </div>
                      <div className="pt1-box mt-5">
                        <div className="row pt-5">
                          <div className="col">
                            <h4 className='t2'>{value.title2}</h4>
                            <p>{value.subtitle4}</p>
                            <p>{value.subtitle5}</p>
                          </div>
                          <div className="col">
                            <h4 className='t2'>{value.title3}</h4>
                            <p>{value.subtitle6}</p>
                            <p>{value.subtitle7}</p>
                          </div>
                          <div className="col">
                            <h4 className='t2'>{value.title4}</h4>
                            <p>{value.subtitle8}</p>
                            <p>{value.subtitle9}</p>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
            <div className="container-fluid px-0 mt-5">
              <img className='pt-img' src={value.img1} alt=""/>
            </div>
          </div>
          ))
          }
        </>
    )
}

export default Comp;