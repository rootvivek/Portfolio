import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
  return (
    <div className="container">
        <div className="footer d-flex justify-content-center my-5">
            <div className="row">
                <div className="col">
                    <h2 className="title py-5">Let's Connect</h2>
                    <FontAwesomeIcon icon={solid('user-secret')} />
                    <FontAwesomeIcon icon={regular('coffee')} />
                    <FontAwesomeIcon icon={brands('twitter')} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer