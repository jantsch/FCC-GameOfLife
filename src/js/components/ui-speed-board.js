import React from 'react';
import {Row,Col,Button} from 'react-bootstrap'
import {speeds as C} from './../constants'

const speedBoard =  ({speed, setSpeed}) =>  
	(	<Row>
	        <Col sm={6} md={4}></Col>
	        <Col sm={6} md={4} className="speed-board">
	        	Speed:
	          	{ speed === C.SLOW ?  <Button bsStyle="primary"  className="btn-speed" onClick={() => setSpeed( C.SLOW)}>Slow  </Button> :  <Button className="btn-speed" onClick={() => setSpeed( C.SLOW)} >Slow  </Button>}
	           	{ speed === C.MEDIUM ?  <Button bsStyle="primary" onClick={() => setSpeed(C.MEDIUM)} >Medium  </Button> :  <Button onClick={() => setSpeed(C.MEDIUM)}>Medium  </Button>}
	           	{ speed === C.FAST ?  <Button bsStyle="primary" onClick={() => setSpeed(C.FAST)} >Fast  </Button> :  <Button onClick={() => setSpeed(C.FAST)}>Fast  </Button>} 
	        </Col>
	        <Col sm={6} md={4}> </Col>            
	    </Row>
	)


export default speedBoard