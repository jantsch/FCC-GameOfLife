import {constants as C }  from './../constants'

export const game = (state = {}, action) => {  
    switch (action.type) { 
    	 case C.SET_GAME:           
            return  {  
                ...state,            
                grid: action.grid,
                generation : state.generation +1                  
            }
         case C.CLEAR_GAME:                         
             return  {  
                ...state,            
                grid: action.grid,
                generation : 0,
                stage: "Pause"                  
            }
         case C.CHANGE_CELL: 
              var grid = state.grid.map((i,index)=> (index === action.cellIndex) ? (i===0? i=2: i=0) : i )
              return  {  
                ...state,            
                grid: grid                               
            }
         case C.SET_SIZE:           
            return  {              
                 ...state,
                grid : action.grid,
                size : {
                            width: action.width,
                            height: action.height       
                        }                  
            }
        case C.SET_SPEED:
            return {               
                ...state,
                speed : action.speed                     
            }
        case C.SET_STAGE:{            
            return {    
                ...state,            
                stage: action.stage                
            }
        }
        default :
            return state
    }

}