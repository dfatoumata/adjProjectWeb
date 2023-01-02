import React, {useState} from 'react'
import Button from '@mui/material/Button';
import './Homeforms.scss'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Homeforms() {
  const [showhide, setShowhide] = useState('')
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

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
                <Button className='btnmeme'  component="span" onClick={(e) => {
            handleOnSubmit(e);
          }}>Preview
                  </Button>

                <br />

<table>
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
</table>

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
                <label htmlFor="contained-button-file"  className='lable'>
                  <Button className='btnmeme'  component="span" onClick={(e) => {
            handleOnSubmit(e);
          }}>
                    <ControlPointIcon className='addedicon'/>
                    <span className='partytext'> <u>add your adjustement here</u> </span>
                  </Button>
                </label>

                <br />

<table>
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
</table>

              </div>
            )
          }
      </div>
        
    </div>
    
  )
}

export default Homeforms