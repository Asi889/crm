import { observer } from 'mobx-react'
import React from 'react';
import ReFormDialogact from './UpdatePop';
import UpdatePop from './UpdatePop'


const Actions = observer(() => {

    return (
        <div id="actions">
            {/* <ReFormDialogact/>  */}
            <UpdatePop/>


        </div>
    );
})

export default Actions;