import { connect } from 'react-redux'
import SizeBoardUI from './../components/ui-size-board'
import {setSize} from './../actions/ac-set-size'

export const SizeBoard = connect(
    state => 
        ({
           width: state.game.size.width,
           height: state.game.size.height
                    
        }),
    dispatch =>
        ({           
            setSize(width,height) {                
                dispatch(setSize(width,height))
            }

        })
)(SizeBoardUI)