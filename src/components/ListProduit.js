import {React, useState, useEffect} from 'react'
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './ListProduit.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ListProduit() {
  const style = {
    // position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);



  const [pilare, setPilare] = useState("");

  const [phase, setPhase] = useState("");
  
  const [Month, setMonth] = useState("");
  
  const [Year, setYear] = useState("");
  const [Cumul_type , SetCumul_type] = useState("");
  
  const [Data_type , setData_type] = useState("");

  const [Entity, setEntity] = useState("");

    const listAjust =[

      {
        "id":1,
        "Pilare" : "ajust",
        "Month" : "janvier",
        "Year" : "2022",
        "phase" : "2",
        "Cumul_type" : "helllo",
        "Data_type" : "donne",
        "Entity" : "ajustement",
      },
      {
        "id":2,
        "Pilare" : "ajust2",
        "Month" : "janvier",
        "Year" : "2022",
        "phase" : "2",
        "Cumul_type" : "helllo",
        "Data_type" : "donne",
        "Entity" : "ajustement",
      },
      {
        "id":3,
        "Pilare" : "ajust3",
        "Month" : "janvier",
        "Year" : "2022",
        "phase" : "2",
        "Cumul_type" : "helllo",
        "Data_type" : "donne",
        "Entity" : "ajustement",
      }
    ];



    const baseURL = 'https://fakestoreapi.com/products/';
    const [produit, setProduit] = useState([]);
    // modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(baseURL).then(response => {
            setProduit (response.data);
            console.log(produit)
        });
      }, []);
      function handleChange(evt) 
      { 
        setPilare(evt.currentTarget.value);
        setPhase(evt.currentTarget.value);
        setMonth(evt.currentTarget.value);
        setYear(evt.currentTarget.value);
     
        setData_type(evt.currentTarget.value);
        setEntity(evt.currentTarget.value);
      }

  return (
    // var produit =produit
    <div>
      <nav class="navbar navbar-expand-lg  z">
  <div class="container">
    <a class="navbar-brand" href="#">home</a>
    <a class="navbar-brand" href="#">Consult</a>
    <a class="navbar-brand" href="#">Add</a>
  </div>
</nav>

  <br /> <br />  <br />

  <table class="table table-">
  <thead>
    <tr>
      <th scope="col">CRM</th>
      <th scope="col">Info</th>
      <th scope="col">code</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Type de Cumul: YTD</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">Phase :realise</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">Source de donnee</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">Base de cout</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">Type de donnee</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<div class="row">
  <div class="col-sm-6">
    <div class="card">
    <h5 class="card-title">Specification</h5>
      <div class="card-body">
      <table class="table">
  <thead>
    <tr>

      <th scope="col">Profil</th>
      <th scope="col">Metier</th>
      <th scope="col">environnement</th>
      <th scope="col">utilisateur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">PER ADJUSTEMENT</td>
      <td>fatoumata_sjnjkf</td>
      <td scope="row">PER ADJUSTEMENT</td>
      <td>fatoumata_sjnjkf</td>
     
    </tr>
    
  </tbody>
</table>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">ADJUSTEMENT Par</h5>
        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">

      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
      </td>
    
     
    </tr>
    
  </tbody>
</table>
      </div>
    </div>
  </div>
</div>
<br /> <br />  <br />
{/* 
  <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
  <thead className="form">
      <tr>
        <th>
        <nav className="navbar navbar-expand-sm navbar-">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link"  href="javascript:void(0)" onClick={handleShow}>ajouter</a>
        </li>
        <li className="nav-item"><i class="bi bi-cloud-upload-fill"></i>
          <a className="nav-link" href="javascript:void(0)">charger</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Liste des ajustement</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

        </th>
    
      </tr>
    </thead>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{  }}>
          <TableRow className="TableRow">
          <TableCell>id</TableCell>
          
          <TableCell >phase</TableCell>
            <TableCell >Month</TableCell>
            <TableCell >Year</TableCell>
            
            
            <TableCell >Cumul_type</TableCell>
            <TableCell >Data_type</TableCell>
            <TableCell >Entity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listAjust.map((listAjust) => (
            <TableRow
              key={listAjust.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {produit.pilare}
              </TableCell>
              <TableCell >{listAjust.phase}</TableCell>
              <TableCell >{listAjust.Month}</TableCell>
              <TableCell >{listAjust.Year}</TableCell>
              <TableCell >{listAjust.Cumul_type}</TableCell>
              <TableCell >{listAjust.Data_type}</TableCell>
              <TableCell >{listAjust.Entity}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   
    {/* corps modal */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulaire d'Ajout</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">pilare</label>
    <div className="col-sm-10">
    <input type="text"name="pilare"onChange={ (event) => setPilare(event.target.value) }value={pilare} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">phase</label>
    <div className="col-sm-10">
    <input type="text"name="phase"onChange={ (event) => setPhase(event.target.value) }value={phase} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Year</label>
    <div className="col-sm-10">
    <input type="text"name="Year"onChange={ (event) => setYear(event.target.value) }value={Year} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Month</label>
    <div className="col-sm-10">
    <input type="text"name="Month"onChange={ (event) => setMonth(event.target.value) }value={Month} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Cumul_type</label>
    <div className="col-sm-10">
    {/* <input type="text"name="Cumul_type"onChange={ (event) => setCumul_type(event.target.value) }value={Cumul_type} /> */}
    </div>
  </div>

  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Data_type</label>
    <div className="col-sm-10">
    <input type="text"name="Data_type"  onChange={ (event) => setData_type(event.target.value) }value={Data_type} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Entity</label>
    <div className="col-sm-10">
    <input type="text"name="Entity" onChange={ (event) => setEntity (event.target.value) }value={Entity} />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Indicator</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="Indicator" id="inputPassword" />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
    </div>
  </div>
  
</form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
             Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
     



    </div>
    
  )
}

export default ListProduit
