import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VotarPage from './pages/votar-page';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Switch>
            <Route path="/votar">
              <VotarPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;