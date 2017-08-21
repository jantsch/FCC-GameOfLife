import React from 'react';
import {sizes as C, cell_types as T} from './../constants'

const Cell = ({width, cellType,index,onChangeCell}) => 
		(
			cellType === T.ALIVE_OLD   ? 
						<div onClick={() =>onChangeCell(index)} className={width===C.WIDTH_BIG? "cell-small alive" : "cell alive"}  > </div> 
					:
						cellType === T.ALIVE  ?
							<div onClick={() =>onChangeCell(index)} className={width===C.WIDTH_BIG? "cell-small old" : "cell old"} > </div>
						:
			        		<div onClick={() => onChangeCell(index)} className={width===C.WIDTH_BIG? "cell-small" : "cell"} > </div>
		)
export default Cell