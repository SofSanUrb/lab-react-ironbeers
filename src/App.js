import React, {useState, useEffect}  from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import logo from './logo.svg';
import axios from 'axios'

// Styling
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

// Components
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import BeerDetail from './components/BeerDetail';
import AddBeer from './components/AddBeer';

function App(props) {
  const[beers, setBeers] = useState([])
  const[filterBeers, setFilterBeers] = useState([])

  // Mounting
  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers(response.data)
        setFilterBeers(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    props.history.push('/')
  }, [beers])

  const handleForm = (event) => {
    event.preventDefault()
    let newBeer = {
      name: event.target.name.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value
    }

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        setBeers([response.data, ...beers])
        setFilterBeers([response.data, ...filterBeers])
      })
      .catch((err) => console.log(err))
    
  }

  const handleSearch = (event) => {
    let filteredBeers = beers.filter(beer => {
      return beer.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilterBeers(filteredBeers)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => {
          return <Home/>
        }}/>
        <Route exact path="/beers" render={() => {
          return <Beers beers={filterBeers} onSearch={handleSearch}/>
        }}/>
        <Route path="/beers/:beerid" render={(routeProps) => {
          return <BeerDetail {...routeProps}/>
        }}/>
        <Route path="/random-beer" render={() => {
          return <RandomBeer/>
        }}/>
        <Route path="/new-beer" render={() => {
          return <AddBeer onSend={handleForm}/>
        }}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
