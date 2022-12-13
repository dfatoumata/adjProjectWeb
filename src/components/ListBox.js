import React from 'react'
import Select from '@mui/material/Select';
function ListBox() {
  return (
    <div >
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
      <td>PER ADJUSTEMENT</td>
      <td>fatoumata_sjnjkf</td>
      <td>PER ADJUSTEMENT</td>
      <td>fatoumata_sjnjkf</td>
     </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
<div>
  <div class="card-body">
    <table class="table">
<p className='r'>Ajustement Par</p>
  <tbody>   
    <tr>
      <td>
        <Select native defaultValue="" id="grouped-native-select" label="Ajustement">
          <option aria-label="None" value="" />
          <optgroup label="Code 1">
            <option value={1}>Entity</option>
            <option value={2}>code</option>
          </optgroup>
          <optgroup label="Code 2">
            <option value={3}>hello</option>
            <option value={4}>node</option>
          </optgroup>
        </Select>
      </td>
    </tr>
   </tbody>
</table>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default ListBox