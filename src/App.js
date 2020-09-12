import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Bootstrap stuff
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//Components
import Footer from './components/Footer';

//Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Justin Nguyen-Galante',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Home', path: '/contact'}
      ],
      home: {
        title: 'Hi, My Name\'s Justin',
        subTitle: "I like trains",
        text: 'Scroll down to learn more about me'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Contact me'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Justin Nguyen-Galante</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}></HomePage>} />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title}></AboutPage>} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title}></ContactPage>} />

          <Footer>

          </Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
