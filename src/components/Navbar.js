import React, { Component } from 'react';


//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    <Button color="secondary">HOME</Button>
                    <Button color="inherit">ABOUT</Button>
                    <Button color="inherit">EDUCATION</Button>
                    <Button color="inherit">EXPERIENCE</Button>
                    <Button color="inherit">PROJECTS</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
