import { connect } from 'react-redux'
import GameScreenUI from './../components/ui-game-screen'
import {setGame} from './../actions/ac-set-game'
import {changeCell} from './../actions/ac-change-cell'
import {clearGame} from './../actions/ac-clear-game'

export const GameScreen = connect(
    state => 
        ({        
           size: state.game.size,
           grid: state.game.grid,
           stage: state.game.stage,
           speed: state.game.speed                      
        }),
    dispatch =>
        ({           
            setGame(grid) {                
                dispatch(setGame(grid))
            },
            clearGame(width,height){
               dispatch(clearGame(width,height))
            },
            changeCell(cellIndex){
               dispatch(changeCell(cellIndex))
            }
        })
)(GameScreenUI)