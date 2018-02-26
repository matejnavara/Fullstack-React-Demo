import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import VendorList from './Components/VendorList';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      vendors:[]
    }
  }

  componentDidMount(){
    this.findVendors();
  }

  findVendors(){
    fetch('/vendors')
    .then(res => res.json())
    .then(vendors => this.setState({vendors}));
  }

  render() {
    return (
      <div>
        <Jumbotron className="App-header">
          <Grid>
            <h1 className="App-title">Vendor Spotlight</h1>
          </Grid>
        </Jumbotron>
        <VendorList vendors={this.state.vendors} />
      </div>
    );
  }
}


export default App;