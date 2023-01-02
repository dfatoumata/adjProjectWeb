import React from 'react'
import Headers from '../partials/Headers/Headers'

function Addform() {
  return (
    <div>
    <div>
        <Headers />
    </div>
    <div className='formt'>
            <form action="" method="post">
                <div className='form-group row mb-3'>
                    <label htmlFor="" className='col-sm-2 col-form-label' >Pilars </label>
                    <div class="col-sm-9">
                        <input type="text" name="pilar" id="pilar" className='form-control' />   
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="" className='col-sm-2 col-form-label'>Phase </label>
                    <div class="col-sm-9">
                        <input type="text" name="phase" id="phase" className='form-control'/>
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="" className='col-sm-2 col-form-label'>year </label>
                    <div class="col-sm-9">
                        <select name="year" id="" placeholder='yyyyy' className='form-control'>
                            <option value="2022">2022</option>
                        </select>

                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="" className='col-sm-2 col-form-label'>Month </label>
                    <div class="col-sm-9">
                        <input type="month" name="month" id="month" placeholder='MM' className='form-control'/>
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="data_type" className='col-sm-2 col-form-label ml-4'>Data_type </label>
                    <div class="col-sm-9">
                        <input type="text" name="data_type" value="AJU_CRM " id="data_type" className='form-control'/>
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="data_source" className='col-sm-2 col-form-label mr-6 col'>Data_source </label>
                    <div class="col-sm-9">
                        <input type="text" name="data_source" id="data_source" className='form-control ml-4'/>
                    </div>
                </div>

                <div className='form-group row mb-3'>
                    <label htmlFor="entity" className='col-sm-2 col-form-label '>entity </label>
                    <div class="col-sm-9">
                        <input type="text" name="entity" id="entity" className='form-control col d-inline-block'/>
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="indicator" className='col-sm-2 col-form-label'>indicator </label>
                    <div class="col-sm-9">
                        <input type="text" name="indicator" id="indicator" className='form-control'/>
                    </div>
                </div>
                <p className="droite">
                    <button type="submit" className="btn btn-danger pull-right">Submit</button>
                </p>
            </form>
    </div>
  </div>
  )
}

export default Addform