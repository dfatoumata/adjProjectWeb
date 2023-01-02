import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Papa from 'papaparse';
import './Manual.scss';
import Headers from '../partials/Headers/Headers';


function Manulaprev() {

    const [parsedCsvData, setParsedCsvData] = useState([]);

  useEffect(() => {
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
    getData();
}, []);
  return (
    <div className="manall">
      <div className="menu">
        <Headers/>
      </div>
      <div className="mabtn">
        <button className='matn' type="submit">Your data has been successfull charged</button>
      </div>
      <div className="manprev">
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
    </div>
    
    
  )
}

export default Manulaprev