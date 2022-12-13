import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
 function Error() {
  return (
    <div >
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">Une erreur est survenue lors de l'ajout</Alert>
      </Stack>
</div> )}

export default Error