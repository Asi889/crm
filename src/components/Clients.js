import React,{ useState} from 'react';
import Client from './Client';
import { Link } from 'react-router-dom';
import TableHead from '@material-ui/core/TableHead';
import { TableRow, TableCell, TableContainer, Table, TableBody } from '@material-ui/core'
import { observer, inject } from 'mobx-react'





const data = require('../dumydata/data');






const Clients = inject("clientData", "list")(observer((props) => {

    // const [personData, setPersonData] = useState([])


    const addPeople = function () {
        props.list.addperson(data)
    }
    addPeople()


    return (

        <div > 
            <TableContainer   >
      <Table stickyHeader>
        <TableHead style={{backgroundColor: "yellow" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>First Contact</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Sold</TableCell>
            <TableCell>Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           <TableRow>
            <TableCell>...</TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

        {/* <TableHead >
        <TableRow  >
          <TableCell >Name</TableCell>
          <TableCell >Sur Name </TableCell>
          <TableCell>Country</TableCell>
          <TableCell >First Contact</TableCell>
          <TableCell >Email Type</TableCell>
          <TableCell>Sold</TableCell>
          <TableCell >Owner</TableCell>
        </TableRow>
      </TableHead> */}

            {props.list.list.map(c => (<Client key={c._id} person={c}  />))} 
        </div>
    );
}))

export default Clients;