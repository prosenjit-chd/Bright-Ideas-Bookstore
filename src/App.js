import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Log from './components/Log/Log';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header> </Header>
          <Switch>
          <Route exact path="/">
              <Home> </Home>
            </Route>
            <Route path="/home">
              <Home> </Home>
            </Route>
            <Route path="/services">
              <Services> </Services>
            </Route>
            <Route path="/registration">
              <Log> </Log>
            </Route>
            <Route path="/about">
              <About> </About>
            </Route>
          </Switch>
      </BrowserRouter>
      <Footer> </Footer>
    </div>
  );
}

export default App;
