import { connect } from 'react-redux'
import SpeedBoardUI from './../components/ui-speed-board'
import {setSpeed} from './../actions/ac-set-speed'

export const SpeedBoard = connect(
    state => 
        ({
           speed: state.game.speed                  
        }),
    dispatch =>
        ({           
            setSpeed(speed) {                
                dispatch(setSpeed(speed))
            }

        })
)(SpeedBoardUI)