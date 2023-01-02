import React, {useState, useEffect} from 'react'
import Papa from 'papaparse';

function Preview() {

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
    <div>
      <table className="ArchiveTable">
                <thead>
                    <tr>
                        <th>Pilars</th>
                        <th>Phase</th>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Cumul_type</th>
                        <th>Data_type</th>
                        <th>Data_source</th>
                        <th>Entity</th>
                        <th>Indicators</th>
                    </tr>
                </thead>
                <tbody>
                    {parsedCsvData &&
                        parsedCsvData.map((parsedData, index) => (
                            <tr key={index}>
                                <td>{parsedData.pilars}</td>
                                <td>{parsedData.phase}</td>
                                <td>{parsedData.year}</td>
                                <td>{parsedData.month}</td>
                                <td>{parsedData.cumul_type}</td>
                                <td>{parsedData.data_type}</td>
                                <td>{parsedData.data_source}</td>
                                <td>{parsedData.entity}</td>
                                <td>{parsedData.indicators}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
    </div>
  )
}

export default Preview