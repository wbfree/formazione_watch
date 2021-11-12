import React from 'react';
import { useState, useEffect } from "react"
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Service from './Service.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://check.patente.it/vpnstatus?json')
        .then(response => response.json())
        .then(data => setServices(data._container[0]._container))
      },[])


  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Sida Watch
          </Navbar.Brand>
        </Container>
      </Navbar>

      {services.map((service, index) => (
        <Service desc={service.descrizione} stato={service.stato}/>
        ))}

      </div>
  );
}

export default App;
