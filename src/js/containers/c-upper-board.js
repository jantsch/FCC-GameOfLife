import { connect } from 'react-redux'
import UpperBoardUI from './../components/ui-upper-board'
import {setStage} from './../actions/ac-set-stage'

export const UpperBoard = connect(
    state => 
        ({
           generation: state.game.generation, 
           stage: state.game.stage,          
        }),
    dispatch =>
        ({           
            setStage(stage) {                
                dispatch(setStage(stage))
            }

        })
)(UpperBoardUI)