import {constants as C }  from './../constants'


export const changeCell = (cellIndex) =>
   ({
        type: C.CHANGE_CELL,
        cellIndex
    })