import React, {useState} from 'react'
import Headers from '../partials/Headers/Headers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addform() {

    const [pilars, setPilars] = useState();
    const [phase, setPhase] = useState();
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [cumultype, setCumulType] = useState();
    const [data_source, setData_source] = useState();
    const [data_type, setData_type] = useState();
    const [indicators, setIndicators] = useState();
    const [entity, setEntity] = useState();

    const handleSubmit = (e) => {
        toast.success(' Your adjustement charged successfull', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        e.preventDefault(); // 👈️ prevent page refresh
        setPilars('');
            setPhase('');
            setYear('');
            setMonth('');
            setEntity('');
            setIndicators('');
            setCumulType('');
            setData_type('');
            setData_source('');
      };

  return (
    <div>
    <div>
        <Headers />
    </div>
    <div className='formt'>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className='form-group row mb-3'>
                    <label htmlFor="" className='col-sm-2 col-form-label' >Pilars </label>
                    <div class="col-sm-9">
                        <input type="text" name="pilars" id="pilar" className='form-control' onChange={event => setPilars(event.target.value)} required/>   
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="" className='col-sm-2 col-form-label'>Phase </label>
                    <div class="col-sm-9">
                        <input type="text" name="phase" id="phase" className='form-control' onChange={event => setPhase(event.target.value)} required/>
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="" className='col-sm-2 col-form-label'>year </label>
                    <div class="col-sm-9">
                        <select name="year" id="" placeholder='yyyyy' className='form-control'>
                            <option value="2022">2023</option>
                            <option value="2022">2022</option>
                            <option value="2022">2021</option>
                            <option value="2022">2020</option>
                            <option value="2022">2019</option>
                        </select>

                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="" className='col-sm-2 col-form-label'>Month </label>
                    <div class="col-sm-9">
                    <select type="text" name="month" id="month" placeholder='MM' className='form-control'>
                            <option value="2022">January</option>
                            <option value="2022">February</option>
                            <option value="2022">March</option>
                            <option value="2022">April</option>
                            <option value="2022">May</option>
                            <option value="2022">June</option>
                            <option value="2022">July</option>
                            <option value="2022">August</option>
                            <option value="2022">September</option>
                            <option value="2022">October</option>
                            <option value="2022">November</option>
                            <option value="2022">December</option>
                        </select>
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="data_type" className='col-sm-2 col-form-label ml-4'>Data_type </label>
                    <div class="col-sm-9">
                        <input type="text" name="data_type" value="AJU_CRM " id="data_type" className='form-control' onChange={event => setData_type(event.target.value)} required/>
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="data_source" className='col-sm-2 col-form-label mr-6 col'>Data_source </label>
                    <div class="col-sm-9">
                        <input type="text" name="data_source" id="data_source" className='form-control ml-4'onChange={event => setData_source(event.target.value)} required/>
                    </div>
                </div>

                <div className='form-group row mb-3'>
                    <label htmlFor="entity" className='col-sm-2 col-form-label '>entity </label>
                    <div class="col-sm-9">
                        <input type="text" name="entity" id="entity" className='form-control col d-inline-block'onChange={event => setEntity(event.target.value)} required/>
                    </div>
                </div>
                <div className='form-group row mb-3'>
                    <label htmlFor="indicator" className='col-sm-2 col-form-label'>indicator </label>
                    <div class="col-sm-9">
                        <input type="text" name="indicator" id="indicator" className='form-control' onChange={event => setIndicators(event.target.value)} required/>
                    </div>
                </div>
                <p className="droite">
                    <button type="submit" className="btn btn-danger pull-right" >Submit</button><ToastContainer icon={true} autoClose={5000}/>
                </p>
            </form>
    </div>
  </div>
  )
}

export default Addform