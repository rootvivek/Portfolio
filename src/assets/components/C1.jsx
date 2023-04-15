import React from "react";

function C1(props){
    return(
        <>
        {props.details.map((value,index)=>(
          <div className="comp-main">
            <div class="sidenav border">
                <ul>
                  <a href={value.link1}>
                    <li>{value.li1}</li>
                  </a>
                  <a href={value.link2}>
                    <li>{value.li2}</li>
                  </a>
                  <a href={value.link3}>
                    <li>{value.li3}</li>
                  </a>
                  <a href={value.link4}>
                    <li>{value.li4}</li>
                  </a>
                  <a href={value.link5}>
                    <li>{value.li5}</li>
                  </a>
                  <a href={value.link6}>
                    <li>{value.li6}</li>
                  </a>
                  <a href={value.link7}>
                    <li>{value.li7}</li>
                  </a>
                  <a href={value.link8}>
                    <li>{value.li8}</li>
                  </a>
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

export default C1;