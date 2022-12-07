import {React, useState, useEffect, useRef} from 'react'
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Success from './Success';
import './Form.css';
import Modal from 'react-bootstrap/Modal';
function FormProduit() {
// fonction pour boite Modal derreur
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

 // fonction pour boite Modal confirmation
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {

    postData()
    setOpen(true);
    


  };

  const handleClosee = () => {
    setOpen(false);
    
  };
  
  
  

  
 
    const p_pilare = useRef(null);
    const p_phase = useRef(null);
    const p_Year = useRef(null);
    const p_Month = useRef(null);
    const p_Cumul_type = useRef(null);
    const p_Data_type = useRef(null);
    const p_Entity = useRef(null);
    const p_Indicator = useRef(null);

    const baseURL = 'https://fakestoreapi.com/products/';
    const [postResult, setPostResult] = useState(null);
    const [posterreur, setPosterreur] = useState(null);
    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    };


    async function postData() {
      const postData = {
        pilare: p_pilare.current.value,
        price: p_phase.current.value,
        Year:  p_Year.current.value,
        Month: p_Month.current.value,
        Cumul_type: p_Cumul_type.current.value,
        Data_type: p_Data_type.current.value,
        Entity: p_Entity.current.value,
        Indicator: p_Indicator.current.value,
      };
  
      try {
        const res =  axios.post('https://fakestoreapi.com/products/', postData, {

        });
  
        const result = {
          ajustement:  "ajouter avec success" ,
         
        };

        const erreur = {
          ajustement:  "erreur" ,
         
        };

     
        setPostResult(fortmatResponse(result));
        setPosterreur(fortmatResponse(erreur));
        
      } catch (erreur) {
 
        // const result = {
        //   status:  + "ajouter avec success" ,
         
        // };
  
       
      }

      
    }
  
    const clearPostOutput = (erreur) => {
      setPostResult(erreur);
    };

    // const [pilare, setpilare] = useState("");
    
    // const [ajust, setAjust] = useState([
    //   { id: 1, pilare: "Abricot" },
    
    // ]);
   
  return (
    <div>
    
    <div className="card">
       
        { fortmatResponse && <div className="alert alert-secondary mt-2" role="alert"><pre>{fortmatResponse}</pre></div> }
        </div>
     <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">pilare</label>
    <div className="col-sm-10">
    <input type="text" ref={p_pilare} className="form-control" />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">phase</label>
    <div className="col-sm-10">
    <input type="text" className="form-control"  ref={p_phase}  />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Year</label>
    <div className="col-sm-10">
    <input type="text"name="Year" className="form-control"  ref={p_Year}  />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Month</label>
    <div className="col-sm-10">
    <input type="select"  name="Month" className="form-control"  ref={p_Month}  />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Cumul_type</label>
    <div className="col-sm-10">
     <input type="text" className="form-control"  ref={p_Cumul_type}  /> 
    </div>
  </div>

  <div className="row mb-3">
    <label htmlFor="inputPassword3"  className="col-sm-2 col-form-label">Data_type</label>
    <div className="col-sm-10">
    <input type="text"name="Data_type"     className="form-control"  ref={p_Data_type}  />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3"  className="col-sm-2 col-form-label">Entity</label>
    <div className="col-sm-10">
    <input type="text"name="Entity"   className="form-control" ref={p_Entity}   />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3"    className="col-sm-2 col-form-label">Indicator</label>
    <div className="col-sm-10">
      <input type="text" className="form-control"    ref={p_Indicator} name="Indicator" id="inputPassword" />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
    </div>
  </div>
  <Button variant="secondary" type='submit'  onClick={handleClickOpen}>
            Ajouter
          </Button>
          <Button variant="secondary" type='submit' onClick={handleShow}>
            Ajouter
          </Button>
          <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation d'Ajout"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText  id="alert-dialog-description">
    
          { postResult && <div ><pre ClassName="a">{postResult}</pre></div> }
        
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
       
           <Button onClick={handleClosee}>ok</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation d'Ajout"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText  id="alert-dialog-description">
    
          { postResult && <div ><pre ClassName="a">{postResult}</pre></div> }
        
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
       
           <Button onClick={handleClosee}>ok</Button>
        </DialogActions>
      </Dialog>
       

 {/* corps modal */}

 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message D'erreur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <br /><br /><br />
           <Button variant="secondary" type='submit' onClick={handleClose}>
            ok
          </Button>
        </Modal.Body>
 
  </Modal>
     






      </div>

  


  )
}

export default FormProduit