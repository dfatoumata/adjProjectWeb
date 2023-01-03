import React from 'react'
import './Home.css'
import Headers from '../partials/Headers/Headers'

function Home() {
  return (
    <div>
        <div>
          <Headers/>
        </div>
        <div className="rowed">
            <h2 className="titre">
              Welcom to ADJAAS portal
            </h2>

            <div className="frame1">
              <p className='description'>ADJAAS is a acronym for "ADJUSTEMENT As A SERVICE". The main objective is to provide a common platform to enable the FPM (Financial Performance Management) for enter data to finalize the CRM (cloture de resultat mensuel) </p>
              <div className="frame">
              <button disabled="disabled" className='firstCircle'>User</button>
              <div className="myarrow">
                <span className="arrow left"></span>
                <span className="line"></span>
                <span className="arrow right"></span>
              </div>
              <div className="diamond">
                <span>Adjustement</span> 
              </div>
              <div class="myarrow2">
                <span className="arrow2 left2"></span>
                <span className="line2"></span>
                <span className="arrow2 right2"></span>
              </div>
              <div className="diamonda">
                <span>Conversions calculated</span>
              </div>
              <button disabled="disabled" className='secondCircle'>User</button>
              </div>

            </div>
            
        </div>
    </div>
  )
}

export default Home