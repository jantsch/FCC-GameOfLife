import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
import Cell from './ui-cell'
import {stages as C, cell_types as T, sizes as S} from './../constants'


class gameScreen extends Component{  
	
	constructor(props) {
		super(props)
		this.state = {
			currentStage: false,
			interval: null,
			onClick: this.props.changeCell
		}
		this.generateNextGeneration = this.generateNextGeneration.bind(this)	
		this.cellCheck = this.cellCheck.bind(this)	
		this.checkGameOver = this.checkGameOver.bind(this)
		
	}

	componentWillMount() {	
		const {width,height} = this.props.size
		const {speed,stage} = this.props	
		if(stage === C.RUN ) 
		{
				if(!this.state.currentStage)
				{
					this.setState(
						{ interval : setInterval(() => {
								this.setState({currentStage: true})
								var grid =[]							
								for(let i = 0; i< width * height; i++)
								{			
									grid.push(Math.floor(Math.random() * (2 - 0) + 0))
								}
								this.props.setGame(grid)							
								}, speed)
						})
				}
		}
	}
	generateNextGeneration(grid,height,width){
		var newGrid = []		
		for (var i = 0; i < grid.length; i++) {

			newGrid.push(T.DEAD);

			var check = this.cellCheck(i,grid,width);

		//keeps the living cell alive if it has 2 or 3 living neighbors
			if ((grid[i] === T.ALIVE_OLD || grid[i] === T.ALIVE) && (check === 3 || check === 2)) {
				newGrid[i] = T.ALIVE;
			}
		//brings the dead cell to life if there are exactly 3 neighbors
			if (grid[i] === T.DEAD && check === 3) {
				newGrid[i] = T.ALIVE_OLD;
			}
		}
		return newGrid
	};

	checkGameOver(grid) {
		//check to see if all of the cells are dead.  Stops the run.
		for (var i = 0; i < grid.length; i++) 
		{
			if (grid[i] === T.ALIVE_OLD || grid[i] === T.ALIVE) {break;}
			if (i === grid.length - 1) 
			{	
					return true
			}
		}

		return false

	}
	cellCheck(i,board,width) {

		var count = 0;
		var borderCell = 0;
		var cells = board.length
			//checks wrap-around for the top row going upward to the bottom
			if (i >= 0 && i <= (width - 1)) {
				borderCell = 1;
				var dif = width - i;
				//console.log('i:' + i + ' dif:' + dif + ' cell:' + (cells - dif));
				if (board[cells - dif] === T.ALIVE_OLD
					|| board[cells - dif] === T.ALIVE) {
					count++;
					//console.log(status + ' 1 high center one for: ' + i + ' cell: '= + (cells - dif));
				}
				if (i !== 0 && (board[cells - dif - 1] === T.ALIVE_OLD
					|| board[cells - dif - 1] === T.ALIVE)) {
					count++;
					//console.log(status + ' 1 high left one for: ' + i + ' cell: ' + (cells - dif - 1));
				}
				if (i !== (width - 1) && (board[cells - dif + 1] === T.ALIVE_OLD
					|| board[cells - dif + 1] === T.ALIVE)) {
					count++;
					//console.log(status + ' 1 high right one for: ' + i + ' cell: ' + (cells - dif + 1));
				}
				//normal checks, not involving wrap-arounds
				if (i !== 0 && (board[i + width - 1] === T.ALIVE_OLD 
					|| board[i + width - 1] === T.ALIVE)) {
					count++;
					//console.log(status + ' 1 low left one for: ' + i + ' cell: ' + (i + width - 1));
				}
				if (board[i + width] === T.ALIVE_OLD 
					|| board[i + width] === T.ALIVE) {
					count++;
					//console.log(status + ' 1 low center one for: ' + i + ' cell: ' + (i + width));
				}
				if (i !== (width - 1) && (board[i + width + 1] === T.ALIVE_OLD 
					|| board[i + width + 1] === T.ALIVE)) {
					count++;
					//console.log(status + ' 1 low right one for: ' + i + ' cell: ' + (i + width + 1));
				}
				if (i !== 0 && (board[i - 1] === T.ALIVE_OLD 
					|| board[i - 1] === T.ALIVE)) {
					count++;
					//console.log(status + ' 1 left one for: ' + i + ' cell: ' + (i - 1));
				}
				if (i !== (width - 1) && (board[i + 1] === T.ALIVE_OLD 
					|| board[i + 1] === T.ALIVE)) {
					count++;
					//console.log(status + ' 1 right right one for: ' + i + ' cell: ' + (i + 1));
				}
			}
			//checks wrap-around for the bottom row going down to the top row
			if (i >= (cells - width) && i <= (cells - 1)) {
				borderCell = 1;
				var dif = i + width - cells;
				//console.log('i:' + i + ' dif:' + dif + ' cell:' + (cells - dif));
				if (board[dif] === T.ALIVE_OLD 
					|| board[dif] ===T.ALIVE) {
					count++;
					//console.log(status + ' 2 low center one for: ' + i + ' cell: ' + (cells - dif));
				}
				if (i !== (cells - width) && (board[dif - 1] === T.ALIVE_OLD  
					|| board[dif - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 2 low left one for: ' + i + ' cell: ' + (cells - dif - 1));
				}
				if (i !== (cells - 1) && (board[dif + 1] === T.ALIVE_OLD  
					|| board[dif + 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 2 low right one for: ' + i + ' cell: ' + (cells - dif + 1));
				}
				//normal checks, not involving wrap-arounds
				if (i !== (cells - width) && (board[i - width - 1] === T.ALIVE_OLD  
					|| board[i - width - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 2 high left for: ' + i + ' cell: ' + (i - width - 1));
				}
				if (board[i - width] === T.ALIVE_OLD  
					|| board[i - width] ===T.ALIVE) {
					count++;
					//console.log(status + ' 2 high center for: ' + i + ' cell: ' + (i + width));
				}
				if (i !== (cells - 1) && (board[i - width + 1] === T.ALIVE_OLD  
					|| board[i - width + 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 2 high right for: ' + i + ' cell: ' + (i - width - 1));
				}
				if (i !== (cells - width) && (board[i - 1] === T.ALIVE_OLD  
					|| board[i - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 2 left for: ' + i + ' cell: ' + (i - 1));
				}
				if (i !== (cells - 1) && (board[i + 1] === T.ALIVE_OLD  
					|| board[i + 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 2 right for: ' + i + ' cell: ' + (i + 1));
				}

			}
			//checks for cells on the right border (wraping around to left)
			if (((i + 1) % width) === 0) {
				borderCell = 1;

				//to the 'immediate right' with wrap-around
				if (board[i - width + 1] === T.ALIVE_OLD  
					|| board[i - width + 1] ===T.ALIVE) {
					count++;
					//console.log(status + ' 3 right for: ' + i + ' cell: ' + (i - width + 1));
				}
				//to the 'lower right' with wrap-around
				if (i !== (cells - 1) && (board[i + 1] === T.ALIVE_OLD  
					|| board[i + 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 lower right: ' + i + ' cell: ' + (i + 1));
				}
				//to the 'lower right' with wrap-around for the last cell
				if (i === (cells - 1) && (board[0] === T.ALIVE_OLD  
					|| board[0] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 lower right for last cell: ' + i + ' cell: 0');
				}
				//to the 'upper right' with wrap-around for all but the cell
				//in the upper right
				if (i > width && (board[i - (2 * width) + 1] === T.ALIVE_OLD  
					|| board[i - (2 * width) + 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 upper right: ' + i + ' cell: ' + (i - (2 * width) + 1));
				}
				//to the 'upper right' with wrap-around for the
				//cell in the upper right
				if (i === width - 1 && (board[(cells - width)] === T.ALIVE_OLD  
					|| board[(cells - width)] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 highdiag one for upper right cell: ' + i + ' cell: ' + (cells + 1 - width));
				}

				//normal checks for normal cells that don't wrap around

				//checks for the cell directly above (non-wrapping)
				if (i !== (width - 1) && i !== (cells - 1) && (board[i - width] === T.ALIVE_OLD  
					|| board[i - width] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 center top for: ' + i + ' cell: ' + (i - width));
				}
				//checks for the cell directly below (non-wrapping)
				if (i !== (cells - 1) && i !== (width - 1) && (board[i + width] === T.ALIVE_OLD  
					|| board[i + width] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 center bottom for: ' + i + ' cell: ' + (i + width));
				}
				if (i !== (cells - 1) && i !== (width - 1) && (board[i + width - 1] === T.ALIVE_OLD  
					|| board[i + width - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 lower left: ' + i + ' cell: ' + (i + width - 1));
				}
				if (i !== (cells - 1) && i !== (width - 1) && (board[i - 1] === T.ALIVE_OLD  
					|| board[i - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 left: ' + i + ' cell: ' + (i - 1));
				}
				if (i !== (width - 1) && i !== (cells - 1) && (board[i - width - 1] === T.ALIVE_OLD  
					|| board[i - width - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 upper left: ' + i + ' cell: ' + (i - width - 1));
				}
				if (i === (width - 1) && (board[cells - width - 1] === T.ALIVE_OLD  
					|| board[cells - width - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 3 upper left for top left cell: ' + i + ' cell: ' + (i + width - 1));
				}

			}
			//checks for cells on the left border (wraping around to right)
			if (((i) % width) === 0 || i === 0) {
				borderCell = 1;

				//to the 'immediate left' with wrap-around
				if (board[i + width - 1] === T.ALIVE_OLD  
					|| board[i + width - 1] ===T.ALIVE) {
					count++;
					//console.log(status + ' 4 left one for: ' + i + ' cell: ' + (i + width - 1));
				}
				//to the 'lower left' with wrap-around for all but lowest left cell
				if (i !== (cells - width) && (board[i + (width * 2) - 1] === T.ALIVE_OLD  
					|| board[i + (width * 2) - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 4 lower left one for: ' + i + ' cell: ' + (i + (width * 2) - 1));
				}
				//to the 'lower right' with wrap-around for the low left cell
				if (i === (cells - width) && (board[width - 1] === T.ALIVE_OLD  
					|| board[width - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 4 low left one for lowest left cell: ' + i + ' cell: ' + (width - 1));
				}
				//to the 'upper left' with wrap-around for all but the cell in the upper left
				if (i >= width && (board[i - 1] === T.ALIVE_OLD  
					|| board[i - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 4 highleft one for: ' + i + ' cell: ' + (i - 1));
				}
				//to the 'upper left' with wrap-around for the cell in the upper left
				if (i === 0 && (board[cells - 1] === T.ALIVE_OLD  
					|| board[cells - 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 4 highleft one for upper left cell: ' + i + ' cell: ' + (cells - 1));
				}

				//normal checks for normal cells that don't wrap around

				//checks for the cell directly above (non-wrapping)
				if (i !== (width + 1) && i !== (cells - width) && i !== 0 && (board[i - width] === T.ALIVE_OLD  
					|| board[i - width] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 4 center top for: ' + i + ' cell: ' + (i - width));
				}
				//checks for the cell directly below (non-wrapping) for all but cell 0
				//or the lower left cell
				if (i < (cells - width) && i !== 0 && (board[i + width] === T.ALIVE_OLD  
					|| board[i + width] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 4 center bottom for: ' + i + ' cell: ' + (i + width));
				}
				//checks for the cell to the upper right (non-wrapping) for all but cell 0
				//or the lower left cell
				if (i !== 0 && i !== (cells - width) && (board[i - width + 1] === T.ALIVE_OLD  
					|| board[i - width + 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 4 upper right for: ' + i + ' cell: ' + (i - width + 1));
				}
				//checks for the cell to the immediate right (non-wrapping)
				if (i !== 0 && i !== (cells - width) && (board[i + 1] === T.ALIVE_OLD  
					|| board[i + 1] ===T.ALIVE)) {
					count++;
					//console.log(status + ' 4 right for: ' + i + ' cell: ' + (i + 1));
				}
				//checks for the cell to the lower right (non-wrapping) for all
				//but lower left cell and cell 0
				
				if (i < (cells - width) && i !== 0) {
					if (board[i + width + 1] === T.ALIVE_OLD  
						|| board[i + width + 1] ===T.ALIVE) {
						count++;
						//console.log(status + ' 4 lower right for: ' + i + ' cell: ' + (i + width + 1));
					}
				} 

			}

			if (borderCell === 0) {
				if (board[i - width] === T.ALIVE_OLD  
					|| board[i - width] ===T.ALIVE) {
					count++;
					//console.log(status + ' non-border -- upper center for: ' + i);
				}
				if (board[i - width - 1] === T.ALIVE_OLD  
					|| board[i - width - 1] ===T.ALIVE) {
					count++;
					//console.log(status + ' non-border -- upper left for: ' + i);
				}
				if (board[i - width + 1] === T.ALIVE_OLD  
					|| board[i - width + 1] ===T.ALIVE) {
					count++;
					//console.log(status + ' non-border -- upper right for: ' + i);
				}
				if (board[i - 1] === T.ALIVE_OLD  
					|| board[i - 1] ===T.ALIVE) {
					count++;
					//console.log(status + ' non-border -- left for: ' + i);
				}
				if (board[i + 1] === T.ALIVE_OLD  
					|| board[i + 1] ===T.ALIVE) {
					count++;
					//console.log(status + ' non-border -- right for: ' + i);
				}
				if (board[i + width] === T.ALIVE_OLD  
					|| board[i + width] ===T.ALIVE) {
					count++;
					//console.log(status + ' non-border -- lower center for: ' + i);
				}
				if (board[i + width - 1] === T.ALIVE_OLD  
					|| board[i + width - 1] ===T.ALIVE) {
					count++;
					//console.log(status + ' non-border -- lower left for: ' + i);
				}
				if (board[i + width + 1] === T.ALIVE_OLD  
					|| board[i + width + 1] ===T.ALIVE) {
					count++;
					//console.log(status + ' non-border -- lower right for: ' + i);
				}
			}
			return count;
	}
	componentDidUpdate(){	
		const {width,height} = this.props.size
		const {speed,stage,grid} = this.props		
		var gridIterator = grid
		this.state.gameOver = false
		
		if(stage === C.CLEAR)			 	
			this.props.clearGame(width,height)
		else if(stage === C.PAUSE )
		{
			this.state.currentStage = false
			clearInterval(this.state.interval)
		}
		else if(stage === C.RUN ) {				
				if(!this.state.currentStage && !this.checkGameOver(grid))
				{	
					this.state.interval = setInterval(() => { 
						
						this.setState({currentStage: true})
						gridIterator = this.generateNextGeneration(gridIterator,height,width)
						if(!this.checkGameOver(gridIterator))
							this.props.setGame(gridIterator)

					}, speed);
				}
		}
	}

	render(){
			const {width} = this.props.size
			const {grid} = this.props						
	return(	<Row>
	        <Col md={ width === S.WIDTH_SMALL? 3: 2}></Col>
			<Col  md={8} className={ width === S.WIDTH_SMALL ? "game-container-1" : ((width === S.WIDTH_MEDIUM ) ? "game-container-2": "game-container-3") }>
	        {  
	           	grid.map((i,index) => <Cell onChangeCell={this.props.changeCell} index={index} width={width} cellType={i}/>)
	        }
	        </Col>
	        <Col md={2}> </Col>            
	    </Row>
	)
}
}


export default gameScreen