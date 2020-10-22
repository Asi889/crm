import React, { useState } from 'react';

import { observer, inject } from 'mobx-react'
import { TableRow, TableCell, Table, TableContainer } from '@material-ui/core'
import UpdatePop from './UpdatePop';


// const data = require('../datad/data');






const Client = inject("clientData", "list")(observer((props) => {

    const [open, setOpen] = React.useState(false);


    let person = props.person

    // const updatePerson = (person) => {
    //     props.updatePerson(person)


    // }

    const updatePerson = (person) => {
        setOpen(true)
    }
    // console.log(props.list.list[0]);

    return (

        <div>
            <TableContainer>
                <Table>
                    <TableRow onDoubleClick={() => updatePerson()} person={props.person} >
                        {/* <TableCell component="th" scope="row"></TableCell> */}
                        <TableCell align="right" >{person.name}</TableCell>
                        <TableCell align="right" >{person.surName}</TableCell>
                        <TableCell align="right" >{person.country}</TableCell>
                        <TableCell align="right" >{person.firstContact}</TableCell>
                        <TableCell align="right" >{person.emailType}</TableCell>
                        <TableCell align="right" >{person.sold === true ? <span>sold</span> : <sapn>not sold</sapn>}</TableCell>
                        <TableCell align="right" >{person.owner}</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>

            {open && (<UpdatePop person={props.person} />)}
        </div>
    );
}))

export default Client;
