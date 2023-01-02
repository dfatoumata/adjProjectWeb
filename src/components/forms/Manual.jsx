import React from 'react'
import Headers from '../partials/Headers/Headers'
import './Manual.scss'
import ControlPointIcon from '@mui/icons-material/ControlPoint';


function Manual() {
  return (
    <div>
      <div>
        <Headers/>
      </div>
    <div className='formt'>
            <form action="" method="post">
                <div className='form-group row mb-3'>
                    <div className='selectfield'>
                        <select name="bulk" id="manual" className='form-control'>
                          <option value="bulk">Manual</option>
                        </select>   
                    </div>
                    <div className='addcontrol'>
                      <ControlPointIcon className='addedicon'/> <br />
                      <small> <a href="/" style={{style: 'none'}}>Choose a csv file to upload</a> </small>
                    </div>
                </div>
            </form>
    </div>
  </div>
  )
}

export default Manual