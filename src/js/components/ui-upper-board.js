import React from 'react';
import {Row,Col,Button} from 'react-bootstrap'
import {stages as C} from './../constants'

const upperBoard =  ({generation,stage, setStage}) =>  
	(	<Row>
	            <Col sm={6} md={4}></Col>
	            <Col sm={6} md={4} className="upper-board">
	            	{ stage === C.RUN ?  <Button bsStyle="primary"  onClick={() => setStage(C.RUN)}>Run  </Button> :  <Button onClick={() => setStage(C.RUN)} > Run  </Button>}
	               	{ stage === C.PAUSE ?  <Button bsStyle="primary" onClick={() => setStage(C.PAUSE)} >Pause  </Button> :  <Button onClick={() => setStage(C.PAUSE)}>Pause  </Button>}
	               	{ stage === C.CLEAR ?  <Button bsStyle="primary" onClick={() => setStage(C.CLEAR)} >Clear  </Button> :  <Button onClick={() => setStage(C.CLEAR)}>Clear  </Button>} 
	           		Generation: {generation} 
	            </Col>
	            <Col sm={6} md={4}> </Col>            
	        </Row>
	)


export default upperBoard