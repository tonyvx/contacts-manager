import React, { Component } from "react";
import {
  Route
} from "react-router-dom";
import logo from "./logo.svg";
import Test from "./components/Test";
import "./App.css";
import axios from "axios";

import ContactList from "./components/ContactList";

class App extends Component {
  // default state object

  

  state = {
    contacts: [],
    id: '1ZX704780346928141'
  };
  
  componentDidMount() {
    axios
      .get("http://logistics.avx007.org/track/ups/"+this.state.id, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(response => {
        // create an array of contacts only with relevant data
        const newContacts = response.data.shipment[0].package[0].activity.map(
          c => {
            return {
              id: c.id,
              name: c.date + " " + c.time + " : " + c.status.description 
            };
          }
        );

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Delivery Updates</h1>
          </header>

          <ContactList contacts={this.state.contacts} />
          
        </div>
        <div className="content">
          <Route path="/:id" component={Test}  />
        </div>
        
        </div>
    );
  }
}

export default App;
