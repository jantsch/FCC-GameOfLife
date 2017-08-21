import React from 'react';
import {Row,Col,Button} from 'react-bootstrap'
import {sizes as C} from './../constants'

const sizeBoard =  ({width, height, setSize}) =>  
	(	<Row>
	        <Col sm={6} md={4}></Col>
	        <Col sm={6} md={4} className="size-board"> 
	        		Board Size:
	            	{ width === C.WIDTH_SMALL ?  <Button className="btn-size" bsStyle="primary"  onClick={() => setSize(C.WIDTH_SMALL,C.HEIGHT_SMALL)}>50x30  </Button> :  <Button className="btn-size" onClick={() => setSize(C.WIDTH_SMALL,C.HEIGHT_SMALL)} >50x30  </Button>}
	               	{ width === C.WIDTH_MEDIUM  ?  <Button bsStyle="primary" onClick={() => setSize(C.WIDTH_MEDIUM ,C.HEIGHT_MEDIUM)} >70x50  </Button> :  <Button onClick={() => setSize(C.WIDTH_MEDIUM ,C.HEIGHT_MEDIUM)}>70x50  </Button>}
	               	{ width === C.WIDTH_BIG  ?  <Button bsStyle="primary" onClick={() => setSize(C.WIDTH_BIG,C.HEIGHT_BIG)} >100x80  </Button> :  <Button onClick={() => setSize(C.WIDTH_BIG,C.HEIGHT_BIG)}>100x80  </Button>} 
	        </Col>
	        <Col sm={6} md={4}> </Col>            
	        </Row>
	)


export default sizeBoard