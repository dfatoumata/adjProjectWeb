import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import './Homeforms.scss'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Modal, Table} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Homeforms() {
  const [showhide, setShowhide] = useState('')
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  // for show modal charged csv file
  const [lgShow, setLgShow] = useState(false);

  
  const notify = () => {
    setTimeout(() => {
      setLgShow(false)
    }, 5000);
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
    
  }

  

  const navigate = useNavigate();

  const navigateToAddAdjustement = () => {
    // 👇️ navigate to /contacts
    navigate('/add');
  };

  const handleshowhide = (e) => {
      const optionschoose = e.target.value;
      console.log(optionschoose)
      setShowhide(optionschoose)
  }

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };


  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));


  return (
    <div>
      <div>
        <form className='formte' >
              <select className='form-control' onChange={(e)=>(handleshowhide(e))}>
              <option value="/bulk">   --------------    Choose type adjustement    ------------- </option>
                  <option value="/bulk">Bulk </option>
                  <option value="/manual">Manual</option>
              </select>
          </form>
          {
            showhide ==='/bulk' && (
              <div className="col-md-6 btnplace">
                <input
                  type="file"
                  accept=".csv"
                  style={{ display: 'none' }}
                  id="contained-button-file"
                  onChange={handleOnChange}
                />
                <label htmlFor="contained-button-file"  className='lable'>
                  <Button className='btnmeme'  component="span">
                    <AddCircleIcon className='addedicon'/>
                    <span className='partytext'> <u>Choose a csv file to upload</u> </span>
                  </Button>
                </label>
                <Button className='btnmeme' onClick={(e) => {handleOnSubmit(e); setLgShow(true)}}>Preview
                </Button>

                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Adjustement charged
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      {/* <Button className='matn' variant="outlined" color="success" style={{float: "right", marginBottom: '10px', fontWeight: 'bold', borderRadius: '15px'}} >Your adjustement charged successfull</Button>{' '} */}
                      <Table striped bordered hover>
                        <thead>
                          <tr key={"header"}>
                            {headerKeys.map((key) => (
                              <th>{key}</th>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          {array.map((item) => (
                            <tr key={item.id}>
                              {Object.values(item).map((val) => (
                                <td>{val}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      <Button variant="contained" color="error" onClick={notify} style={{float: "right", marginBottom: '2px'}} > Submit</Button><ToastContainer icon={true} autoClose={5000}/>                
                  </Modal.Body>
                  <Modal.Footer>
                  
                  </Modal.Footer>
                </Modal>

                <br />

              </div>
            )
          }

          {
            showhide ==='/manual' && (
              <div className="col-md-6 btnplace">
                <input
                  type="file"
                  accept=".csv"
                  style={{ display: 'none' }}
                  id="contained-button-file"
                  onChange={handleOnChange}
                />
                <label htmlFor="contained-button-file"  className='lable' onClick={navigateToAddAdjustement}>
                  <Button className='btnmeme'  component="span" onClick={(e) => {
                    handleOnSubmit(e); }}>
                    <ControlPointIcon className='addedicon'/>
                    <span className='partytext'> <a href="/add"><u>add your adjustement here</u></a>  </span>
                  </Button>
                </label>
              </div>
            )
          }
      </div>
        
    </div>
    
  )
}

export default Homeforms