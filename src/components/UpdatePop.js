import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { observer, inject } from 'mobx-react'


const UpdatePop = inject("clientData", "list")(observer((props) => {
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState("")
  const [surName, setSurName] = React.useState("")
  const [country, setCountry] = React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleName = (e) => {
    let t = e.target.value
    console.log(t);
    setName(e.target.value)
  }
  const handleSurName = (e) => {
    let t = e.target.value
    console.log(t);
    setSurName(e.target.value)
  }
  const handleCountry = (e) => {
    let t = e.target.value
    console.log(t);
    setCountry(e.target.value)
  }
  const update = () => {
    console.log(name);
    console.log(surName);
    console.log(country);
    props.list.updatePerson(props.person.id, name, surName, country)
    handleClose()
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="string"
          value={name}
          onChange={handleName}
        // fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Sur Name"
          type="string"
          value={surName}
          onChange={handleSurName}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Country"
          type="string"
          value={country}
          onChange={handleCountry}
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={update} >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}))
export default UpdatePop
