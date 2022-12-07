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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './ListProduit.css';
import FormProduit from './FormProduit';
// import { green } from '@mui/material/colors';
// import Icon from '@mui/material/Icon';
function ListProduit() {
 



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
// methode ajout
// handleChange =e => {
//   this.setState({value: event.target.value});
// }

// handleSubmit(event) {
//   alert('Le nom a été soumis : ' + this.state.value);
//   event.preventDefault();
// }

      const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClosee = () => {
        setOpen(false);
      };
  return (


    
    // var produit =produit
    <div>


      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Chargement de fichier?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         Voulez vous charger le fichier
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClosee} autoFocus>
            Non
          </Button>
           <Button onClick={handleClosee}>Oui</Button>
        </DialogActions>
      </Dialog>
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
        <br /> <br />  <br />
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
  </div><button class="btn btn-secondary dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Ajoutement Par
  </button>
  <FormControl sx={{ m: 1, minWidth: 30 }}>
        {/* <InputLabel htmlFor="grouped-native-select">Ajustement</InputLabel> */}
        <Select native defaultValue="" id="grouped-native-select" label="Ajustement">
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            <option value={1}>Entity</option>
            <option value={2}>code</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>hello</option>
            <option value={4}>node</option>
          </optgroup>
        </Select>
      </FormControl>
     
  <div class="col-sm-6">
    <div>
      <div class="card-body">
        
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
          <a className="nav-link" href="javascript:void(0)"  onClick={handleClickOpen}>charger</a>
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
              key={listAjust.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {listAjust.pilare}
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

       <FormProduit/>

        </Modal.Body>
        
      </Modal>
     



    </div>
    
  )
}

export default ListProduit
