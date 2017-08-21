import {constants as C }  from './../constants'


const defaultGrid = function(width,height) {

		var grid =[]

		for(let i = 0; i< width * height; i++)
		{			
			grid.push(Math.floor(Math.random() * (2 - 0) + 0))
		}
		return grid

}

export const setSize = (width,height) =>
   ({
        type: C.SET_SIZE,
        width,
        height,
        grid: defaultGrid(width,height)
    })

