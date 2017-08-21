import React, { Component } from 'react';
import './../scss/App.css';
import {UpperBoard} from './containers/c-upper-board'
import {SizeBoard} from './containers/c-size-board'
import {SpeedBoard} from './containers/c-speed-board'
import {GameScreen} from './containers/c-game-screen'
import {Jumbotron,Grid} from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">         
          <h2>FCC - Game Of Life</h2>
        </div>
        <Jumbotron>
          <Grid>  
           <UpperBoard />   
           <GameScreen />       
           <SizeBoard />
           <SpeedBoard />            
          </Grid>         
        </Jumbotron>
      </div>
    );
  }
}

export default App;
