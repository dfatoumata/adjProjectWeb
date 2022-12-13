import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import './ListAjust.css';
import Chargement from './Chargement';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Form from './Form';
import ListBox from './ListBox';
import NavBar from './NavBar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import ListIcon from '@mui/icons-material/List';
function ListAjust() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
   setOpen(true);
 };
 const handleClosee = () => {
   setOpen(false);
 };
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
      },);
  return (
    <div>
      <div>
  <NavBar/>
</div>
      <br /> <br /> <br />
      <div>
  <ListBox/>
</div>
<br /> <br />  <br />
    <tr>
        <th>
        <nav className="navbar navbar-expand-sm navbar-">
  <div className="container-fluid">
      <ul className="navbar-nav me-auto">
        <li >
        <Fab variant="extended" onClick={handleShow} size="small" color="primary" aria-label="add">
  <AddIcon sx={{ mr: 1 }} />
  Ajouter
</Fab></li>
        <Fab variant="extended" onClick={handleClickOpen}   size="small" color="primary" aria-label="add">
  <NavigationIcon sx={{ mr: 1 }} />
  charger 
<Dialog open={open} aria-labelledby="alert-dialog-title"aria-describedby="alert-dialog-description">
       <DialogTitle id="alert-dialog-title">
          {"Chargement de fichier?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <Chargement/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosee} autoFocus>
            Non
          </Button>
           <Button onClick={handleClosee}>Oui</Button>
        </DialogActions>
      </Dialog></Fab>
<Fab variant="extended" size="small" color="primary" aria-label="add">
<ListIcon sx={{ mr: 1 }} />
  Liste D'Ajustement
</Fab>
      </ul>
  </div>
</nav></th> </tr>
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
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
       <Form/>
       </Modal.Body>
      </Modal>
 </div>)}
export default ListAjust
