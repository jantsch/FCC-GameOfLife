const constants = {
    SET_SIZE: "SET_SIZE",
    SET_SPEED: "SET_SPEED",
    SET_STAGE: "SET_STAGE",
    SET_GRID: "SET_GRID",   
    SET_GAME: "SET_GAME",
    CLEAR_GAME: "CLEAR_GAME",
    CHANGE_CELL: "CHANGE_CELL"  
}
const stages = {
    RUN: "Run",
    PAUSE: "Pause",
    CLEAR: "Clear"
}
const speeds = {
    SLOW: 500,
    MEDIUM: 300,
    FAST: 100
}
const sizes = {
    WIDTH_SMALL: 50,
    WIDTH_MEDIUM: 70,
    WIDTH_BIG: 100,
    HEIGHT_SMALL: 30,
    HEIGHT_MEDIUM: 50,
    HEIGHT_BIG: 80
}
const cell_types = {
    ALIVE: 2,
    ALIVE_OLD: 1,
    DEAD: 0
}

export {constants,stages,speeds,sizes,cell_types}