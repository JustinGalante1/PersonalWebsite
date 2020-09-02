import React, { Component } from 'react';
import './App.css';
import themeFile from './util/theme';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Pages
import home from './pages/home';
import about from './pages/about';

//Components
import Navbar from './components/Navbar';

//Material UI
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme(themeFile);

class App extends Component{
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route path="/" component={home}/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <Route path="/about" component={about}/>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
