import React from 'react'
import './Bulk.scss'
import Headers from '../partials/Headers/Headers'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

function Bulk() {
  return (
    <div>
      <div>
        <Headers/>
      </div>
    <div className='formt'>
            <form action="" method="post">
                <div className='form-group row mb-3'>
                    <div className='selectfield'>
                        <select name="bulk" id="bulk" className='form-control'>
                          <option value="bulk">Bulk</option>
                        </select>   
                    </div>
                    <div className='addcontrol'>
                      <input type="file" name="" id="" style={{display: 'none'}} />
                      <ControlPointIcon className='addedicon'/> <br />
                      <small> <a href="/" style={{style: 'none'}}>Choose a csv file to upload</a> </small>
                    </div>
                </div>
            </form>
    </div>
  </div>
  )
}

export default Bulk