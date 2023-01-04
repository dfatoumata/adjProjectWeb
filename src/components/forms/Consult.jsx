import React, {useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Papa from 'papaparse';
import './Consult.scss';
import Headers from '../partials/Headers/Headers';

function Consult() {

    const [parsedCsvData, setParsedCsvData] = useState([]);
    const [showhide, setShowhide] = useState('')



  const handleshowhide = (e) => {
      const optionschoose = e.target.value;
      console.log(optionschoose)
      setShowhide(optionschoose)
  }


  async function getData() {
    const response = await fetch("/file/data.csv");
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value); // the csv text
    const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    const rows = results.data; // array of objects
    setParsedCsvData(rows);
  }

  async function getAdjustement2() {
    const response = await fetch("/file/manual.csv");
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value); // the csv text
    const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    const rows = results.data; // array of objects
    setParsedCsvData(rows);
  }

  async function getAdjustement3() {
    const response = await fetch("/file/preview.csv");
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value); // the csv text
    const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    const rows = results.data; // array of objects
    setParsedCsvData(rows);
  }

  async function getAdjustement4() {
    const response = await fetch("/file/manual.csv");
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value); // the csv text
    const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    const rows = results.data; // array of objects
    setParsedCsvData(rows);
  }

  async function getAdjustement5() {
    const response = await fetch("/file/data.csv");
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value); // the csv text
    const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    const rows = results.data; // array of objects
    setParsedCsvData(rows);
  }

  async function getAdjustementf() {
    const response = await fetch("/file/data.csv");
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value); // the csv text
    const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
    const rows = results.data; // array of objects
    setParsedCsvData(rows);
  }


  return (
    <div className="manall">
      <div className="menu">
        <Headers/>
      </div>
      <div className="manprev">
        <div className="row">
            <div className="col-md-4 adjust" >
                <button type="submit" className='btnadjustement' value='adjust1' onClick={(e)=>{handleshowhide(e); getData()}}>Adjustement 1 - 15/05/2022</button>
                <button type="submit" className='btnadjustement' value='adjust2' onClick={(e)=>{handleshowhide(e); getAdjustement2()}}>Adjustement 2 - 30/06/2022</button>
                <button type="submit" className='btnadjustement' value='adjust3' onClick={(e)=>{handleshowhide(e); getAdjustement3()}}>Adjustement 3 - 02/07/2022</button>
                <button type="submit" className='btnadjustement' value='adjust4' onClick={(e)=>{handleshowhide(e); getAdjustement4()}}>Adjustement 4 - 15/05/2022</button>
                <button type="submit" className='btnadjustement' value='adjust5' onClick={(e)=>{handleshowhide(e); getAdjustement5()}}>Adjustement 5 - 15/05/2022</button>
                <button type="submit" className='btnadjustement' value='adjust6' onClick={(e)=>{handleshowhide(e); getAdjustementf()}}>Adjustement 6 - 15/05/2022</button>
                <button type="submit" className='btnadjustement' value='adjust7' onClick={(e)=>(handleshowhide(e))}>Adjustement 7 - 15/05/2022</button>
                <button type="submit" className='btnadjustement' value='adjust8' onClick={(e)=>(handleshowhide(e))}>Adjustement 8 - 15/05/2022</button>
                <button type="submit" className='btnadjustement' value='adjust9' onClick={(e)=>(handleshowhide(e))}>Adjustement 9 - 15/05/2022</button>
                <button type="submit" className='btnadjustement' value='adjust10' onClick={(e)=>(handleshowhide(e))}>Adjustement 10 - 15/05/2022</button>
                <button type="submit" className='btnadjustement' value='adjust11' onClick={(e)=>(handleshowhide(e))}>Adjustement 11 - 15/05/2022</button>
            </div>
            <div className="col-md-8">

              {/* debut */}

              {
               showhide ==='adjust1' && (
              <div className="col-md-8 ">
                
                
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='entete'>
                    <TableRow>
                        <TableCell>Pilars</TableCell>
                        <TableCell align="right">Phase</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Cumul_type</TableCell>
                        <TableCell align="right">Data_type</TableCell>
                        <TableCell align="right">Data_source</TableCell>
                        <TableCell align="right">Entity</TableCell>
                        <TableCell align="right">Indicators</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { parsedCsvData && parsedCsvData.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.pilars}
                        </TableCell>
                        <TableCell align="right">{row.phase}</TableCell>
                        <TableCell align="right">{row.year}</TableCell>
                        <TableCell align="right">{row.month}</TableCell>
                        <TableCell align="right">{row.cumul_type}</TableCell>
                        <TableCell align="right">{row.data_type}</TableCell>
                        <TableCell align="right">{row.data_source}</TableCell>
                        <TableCell align="right">{row.entity}</TableCell>
                        <TableCell align="right">{row.indicators}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                
            </TableContainer>

              </div>
                )
              }
              {/* fin */}

              {/* adjustement2 */}
              {
               showhide ==='adjust2' && (
              <div className="col-md-8 ">
                
                
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='entete'>
                    <TableRow>
                        <TableCell>Pilars</TableCell>
                        <TableCell align="right">Phase</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Cumul_type</TableCell>
                        <TableCell align="right">Data_type</TableCell>
                        <TableCell align="right">Data_source</TableCell>
                        <TableCell align="right">Entity</TableCell>
                        <TableCell align="right">Indicators</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { parsedCsvData && parsedCsvData.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.pilars}
                        </TableCell>
                        <TableCell align="right">{row.phase}</TableCell>
                        <TableCell align="right">{row.year}</TableCell>
                        <TableCell align="right">{row.month}</TableCell>
                        <TableCell align="right">{row.cumul_type}</TableCell>
                        <TableCell align="right">{row.data_type}</TableCell>
                        <TableCell align="right">{row.data_source}</TableCell>
                        <TableCell align="right">{row.entity}</TableCell>
                        <TableCell align="right">{row.indicators}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                
            </TableContainer>

              </div>
                )
              }
              {/* fin adjustement2 */}
              {/* adjustement 3 */}
              {
               showhide ==='adjust3' && (
              <div className="col-md-8 ">
                
                
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='entete'>
                    <TableRow>
                        <TableCell>Pilars</TableCell>
                        <TableCell align="right">Phase</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Cumul_type</TableCell>
                        <TableCell align="right">Data_type</TableCell>
                        <TableCell align="right">Data_source</TableCell>
                        <TableCell align="right">Entity</TableCell>
                        <TableCell align="right">Indicators</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { parsedCsvData && parsedCsvData.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.pilars}
                        </TableCell>
                        <TableCell align="right">{row.phase}</TableCell>
                        <TableCell align="right">{row.year}</TableCell>
                        <TableCell align="right">{row.month}</TableCell>
                        <TableCell align="right">{row.cumul_type}</TableCell>
                        <TableCell align="right">{row.data_type}</TableCell>
                        <TableCell align="right">{row.data_source}</TableCell>
                        <TableCell align="right">{row.entity}</TableCell>
                        <TableCell align="right">{row.indicators}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                
            </TableContainer>

              </div>
                )
              }

              {/* fin */}
              {/* adjustement 4 */}

              {
               showhide ==='adjust4' && (
              <div className="col-md-8 ">
                
                
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='entete'>
                    <TableRow>
                        <TableCell>Pilars</TableCell>
                        <TableCell align="right">Phase</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Cumul_type</TableCell>
                        <TableCell align="right">Data_type</TableCell>
                        <TableCell align="right">Data_source</TableCell>
                        <TableCell align="right">Entity</TableCell>
                        <TableCell align="right">Indicators</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { parsedCsvData && parsedCsvData.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.pilars}
                        </TableCell>
                        <TableCell align="right">{row.phase}</TableCell>
                        <TableCell align="right">{row.year}</TableCell>
                        <TableCell align="right">{row.month}</TableCell>
                        <TableCell align="right">{row.cumul_type}</TableCell>
                        <TableCell align="right">{row.data_type}</TableCell>
                        <TableCell align="right">{row.data_source}</TableCell>
                        <TableCell align="right">{row.entity}</TableCell>
                        <TableCell align="right">{row.indicators}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                
            </TableContainer>

              </div>
                )
              }
              {/* fin */}
              {/* adjustement 5 */}
              {
               showhide ==='adjust5' && (
              <div className="col-md-8 ">
                
                
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='entete'>
                    <TableRow>
                        <TableCell>Pilars</TableCell>
                        <TableCell align="right">Phase</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Cumul_type</TableCell>
                        <TableCell align="right">Data_type</TableCell>
                        <TableCell align="right">Data_source</TableCell>
                        <TableCell align="right">Entity</TableCell>
                        <TableCell align="right">Indicators</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { parsedCsvData && parsedCsvData.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.pilars}
                        </TableCell>
                        <TableCell align="right">{row.phase}</TableCell>
                        <TableCell align="right">{row.year}</TableCell>
                        <TableCell align="right">{row.month}</TableCell>
                        <TableCell align="right">{row.cumul_type}</TableCell>
                        <TableCell align="right">{row.data_type}</TableCell>
                        <TableCell align="right">{row.data_source}</TableCell>
                        <TableCell align="right">{row.entity}</TableCell>
                        <TableCell align="right">{row.indicators}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                
            </TableContainer>

              </div>
                )
              }
              {/* fin */}
              {/* adjustement 6 */}
              {
               showhide ==='adjust6' && (
              <div className="col-md-8 ">
                
                
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='entete'>
                    <TableRow>
                        <TableCell>Pilars</TableCell>
                        <TableCell align="right">Phase</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Cumul_type</TableCell>
                        <TableCell align="right">Data_type</TableCell>
                        <TableCell align="right">Data_source</TableCell>
                        <TableCell align="right">Entity</TableCell>
                        <TableCell align="right">Indicators</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { parsedCsvData && parsedCsvData.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.pilars}
                        </TableCell>
                        <TableCell align="right">{row.phase}</TableCell>
                        <TableCell align="right">{row.year}</TableCell>
                        <TableCell align="right">{row.month}</TableCell>
                        <TableCell align="right">{row.cumul_type}</TableCell>
                        <TableCell align="right">{row.data_type}</TableCell>
                        <TableCell align="right">{row.data_source}</TableCell>
                        <TableCell align="right">{row.entity}</TableCell>
                        <TableCell align="right">{row.indicators}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                
            </TableContainer>

              </div>
                )
              }
              {/* fin */}
            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='entete'>
                    <TableRow>
                        <TableCell>Pilars</TableCell>
                        <TableCell align="right">Phase</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Cumul_type</TableCell>
                        <TableCell align="right">Data_type</TableCell>
                        <TableCell align="right">Data_source</TableCell>
                        <TableCell align="right">Entity</TableCell>
                        <TableCell align="right">Indicators</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { parsedCsvData && parsedCsvData.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.pilars}
                        </TableCell>
                        <TableCell align="right">{row.phase}</TableCell>
                        <TableCell align="right">{row.year}</TableCell>
                        <TableCell align="right">{row.month}</TableCell>
                        <TableCell align="right">{row.cumul_type}</TableCell>
                        <TableCell align="right">{row.data_type}</TableCell>
                        <TableCell align="right">{row.data_source}</TableCell>
                        <TableCell align="right">{row.entity}</TableCell>
                        <TableCell align="right">{row.indicators}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                
            </TableContainer> */}
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Consult