import {constants as C }  from './../constants'

export const clearGame = (width,height) =>
   ({
        type: C.CLEAR_GAME,
        grid: new Array(width*height).fill(0)
    })